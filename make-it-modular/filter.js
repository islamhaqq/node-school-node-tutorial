const fs = require('fs');
const path = require('path');

module.exports = (directoryPath, fileExtensionToFilterBy, callback) => {
    // list out all files in directory
    fs.readdir(directoryPath, 'utf8', (err, arrayOfFileNames) => {
        if (err) return callback(err);

        const filteredFileNames = arrayOfFileNames.filter(fileName => path.extname(fileName) === `.${fileExtensionToFilterBy}`);
        callback(null, filteredFileNames);
    });
};