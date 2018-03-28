const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) throw new Error(err);

	const numberOfNewLines = data.split('\n').length - 1;
	console.log(numberOfNewLines);
});
