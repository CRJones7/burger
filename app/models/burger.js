const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

const Burger = sequelize.define('burger', {
    burger_name: Sequelize.STRING,
    devour: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;