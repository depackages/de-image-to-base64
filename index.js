const sharp = require('sharp');

function imageToBase64(filePath, callback) {
    sharp(filePath)
        .toFormat('jpeg')
        .toBuffer((err, data) => {
            if (err) {
                callback(err);
                return;
            }

            const base64 = data.toString('base64');
            callback(null, base64);
        });
}


module.exports = imageToBase64;
