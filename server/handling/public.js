const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

function public(res, endpoint) {
    const filePath = path.join(__dirname, '..', '..', endpoint)
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, { "Content-Type": mime.lookup(endpoint) });
            res.end(data);
        }
    })
}

module.exports = public;