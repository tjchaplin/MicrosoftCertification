/// <reference path="_namespace.js" />

(function () {

    var createCanvas = function (size) {
        /// <summary>Creates a canvas used for image manipulation.</summary>

        var temporaryCanvas = document.createElement("canvas");
        temporaryCanvas.setAttribute("width", size.width);
        temporaryCanvas.setAttribute("height", size.height);
        return temporaryCanvas;
    };

    var getImageData = function (context, image) {
        /// <summary>Draws the image onto the canvas context, then returns the resulting image data.</summary>

        context.drawImage(image, 0, 0);
        return context.getImageData(0, 0, image.width, image.height);
    };

    conference.grayscaleImage = function (image) {
        /// <summary>Converts a colour image into grey scale.</summary>
        var deferred = $.Deferred();

        var canvas = createCanvas(image);
        var context = canvas.getContext("2d");
        var imageData = getImageData(context, image);

        var handleMessage = function (event) {
            var message = event.data;
            
            if (message.progress) {
                deferred.notifyWith(this, [message.progress]);

            } else if (message.done) {
                // Update the canvas with the gray scaled image data.
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.putImageData(message.done, 0, 0);
                deferred.resolveWith(this, [canvas]);
            }
        };

        var worker = new Worker("/scripts/grayscale-worker.js");
        worker.addEventListener("message", handleMessage.bind(this));
        worker.postMessage(imageData);

        // Returning a jQuery Deferred makes this function easy to chain together with other deferred operations.
        return deferred;
    };

} ());
