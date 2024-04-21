
# de-image-to-base64

A Node.js package to convert images of various formats to Base64 format using the Sharp library.

## Installation

To install this package, simply run the following command:

```bash
npm install de-image-to-base64
```

or

```bash
bun install de-image-to-base64
```

## Usage

The `de-image-to-base64` package provides a simple function to convert images to Base64 format. Here's how you can use it:

```javascript
const imageToBase64 = require('de-image-to-base64');

imageToBase64('path/to/image.jpg', (err, base64) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(base64); // Base64 representation of the image
});
```

The `imageToBase64` function takes two arguments: the file path of the image you want to convert, and a callback function. The callback function will be invoked with an error (if any) as the first argument, and the resulting Base64 string as the second argument.

## Supported Image Formats

The `de-image-to-base64` package uses the Sharp library, which supports a wide range of image formats, including JPEG, PNG, WebP, GIF, TIFF, BMP, and more.