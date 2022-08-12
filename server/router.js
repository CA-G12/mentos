const home = require("./handling/home");
const public = require("./handling/public");
const autocomplete = require("./handling/autocomplete");

function router(req, res) {
    let endpoint = req.url;

    if (endpoint === '/') {
        home(res);
    } else if (endpoint.includes('clinet')) {
        public(res, endpoint);
    } else if (endpoint.includes('/movies-names.json')) {
        autocomplete(res, endpoint);
    }
}

module.exports = router;