const http = require('http');

const url = process.argv[2];
if (!url) throw new Error('Please provide url as the first command-line argument!');

console.log(url);

http.get(url, res => {
    // get raw response body data
    let rawData = '';
    res.on('data', chunk => rawData += chunk);
    console.log('data: ' + rawData);
    // res.on('end', () => {
    //     try {
    //         const {body} = JSON.parse(rawData);
    //         console.log(body);
    //     } catch (err) {
    //         if (err) throw new Error('failed to parse response body to JSON', err);
    //     }
    // })
})