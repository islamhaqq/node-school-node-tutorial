const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExtensionToFilterBy = `.${process.argv[3]}`;

// list out all files in directory
fs.readdir(directoryPath, 'utf8', (err, arrayOfFilenames) => {
    if (err) throw new Error(err);
    
    arrayOfFilenames.forEach(fileName => {
        if (path.extname(fileName) === fileExtensionToFilterBy) console.log(fileName);
    });
})