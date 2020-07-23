const Burger = require("../models/burger.js");

module.exports = function (app) {
    app.post("/api/new", function (req, res) {
        console.log("New Burg");
        console.log(req.body);

        Burger.create({
            burger_name: req.body.burger_name,

        }).then(function (results) {
            res.end()
        })
    })
}