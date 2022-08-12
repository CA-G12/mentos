const path = require('path');
const fs = require('fs');

function home(res) {
    const filePath = path.join(__dirname, '..', '..', 'clinet', 'index.html')
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    })
}

module.exports = home;