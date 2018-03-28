const filter = require('./filter');

const directoryPath = process.argv[2];
const fileExtensionToFilterBy = process.argv[3];

filter(directoryPath, fileExtensionToFilterBy, (err, filteredFileNames) => {
    if (err) throw new Error(err);
    
    filteredFileNames.forEach(fileName => console.log(fileName));
})