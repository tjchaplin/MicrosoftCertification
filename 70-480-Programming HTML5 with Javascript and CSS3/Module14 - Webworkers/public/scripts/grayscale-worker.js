// This script is for a Web Worker.
addEventListener("message", function (event) {
    var imageData = event.data;
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        grayscalePixel(pixels, i);
    }
    postMessage({ done: imageData });
});

var grayscalePixel = function (pixels, index) {
    // Updates the pixel, starting at the given index, to be gray scale.

    var brightness = 0.34 * pixels[index] + 0.5 * pixels[index + 1] + 0.16 * pixels[index + 2];

    pixels[index] = brightness; // red
    pixels[index + 1] = brightness; // green
    pixels[index + 2] = brightness; // blue
};
