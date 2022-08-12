const path = require('path');
const fs = require('fs');

function autocomplete(res, endpoint) {
    const filePath = path.join(__dirname, '..', '..', 'movies-names.json')
    const searchValue = endpoint.split('=')[1];

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            data = JSON.parse(data);
            let felteredData = data.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase().trim())).slice(0, 5)
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(felteredData));
        }
    })
}

module.exports = autocomplete;