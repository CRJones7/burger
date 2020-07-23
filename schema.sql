DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT AUTO INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR (35) NOT NULL,
    devour BOOLEAN
);
INSERT INTO burgers (burger_name, devour)
VALUES ('Plain Jake Burger', false),
    ('Bacon Cheese Burger', false),
    ('Cali Burger', false),
    ('Impossible Burger', false),
    ('Veggie Burger', false);