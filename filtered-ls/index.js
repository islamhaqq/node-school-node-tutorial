const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExtensionToFilterBy = `.${process.argv[3]}`;

// list out all files in directory
fs.readdir(directoryPath, 'utf8', (err, arrayOfFilenames) => {
    if (err) throw new Error(err);
    
    const filteredFilenames = arrayOfFilenames.filter(fileName => 
        path.extname(fileName) === fileExtensionToFilterBy
    )

    filteredFilenames.forEach(fileName => {console.log(fileName)})
})

// do an Array.prototype.filter on the files
// search for files that match `*.${fileExtensionToFilterBy}`