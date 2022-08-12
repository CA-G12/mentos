const path = require('path');
const fs = require('fs');

function error(res) {
    const filePath = path.join(__dirname, '..', '..', 'clinet', '404.html')
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    })
}

module.exports = error;