// This script is for a Web Worker.

addEventListener("message", function (event) {

    var imageData = event.data;
    var pixels = imageData.data; // Pixels is an array of integers encoded as [ red, green, blue, alpha, red, green, blue, alpha, red, green, blue, alpha, ... ]
    var previousProgress;

    var greyScalePixel = function (index) {
        var brightness = 0.34 * pixels[index] + 0.5 * pixels[index + 1] + 0.16 * pixels[index + 2];

        pixels[index] = brightness; // red
        pixels[index + 1] = brightness; // green
        pixels[index + 2] = brightness; // blue
    };

    var updateProgress = function (index) {
        var progress = Math.floor(100 * index / pixels.length);
        if (previousProgress !== progress) { // Avoid flooding the client with the same repeated progress.
            postMessage({ progress: progress });
            previousProgress = progress;
        }
    };

    for (var i = 0; i < pixels.length; i += 4) {
        greyScalePixel(i);
        updateProgress(i);
    }

    postMessage({ progress: 100 });
    postMessage({ done: imageData });

});
