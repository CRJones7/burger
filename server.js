const express = require("express");
const mysql = require("mysql");
const escapeHtml = require("escape-html");
const views = require("./views");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount a public folder, providing routes automatically for each of these static files
app.use(express.static("public"));

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Use Render Functions to render the main index.html page with the burgers in it.
app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.send(
            views.app(
                views.burgers({ burgers: data })
            )
        )
    });
});

// Create a new burger
app.post("/api/burgers", function (req, res) {
    const sanitizedHtml = escapeHtml(req.body.buger);
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [sanitizedHtml], function (err, result) {
        if (err) {
            return res.status(500).end();
        }

        // Send back the ID of the new plan
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

