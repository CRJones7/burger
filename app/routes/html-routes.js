var path = require("path");


module.exports = function (app) {

    //index rout to main html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/main.html"));
    });
}

