CREATE DATABASE bamazonDB;


USE bamazonDB;

CREATE TABLE products (
    id INT (9) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NULL,
    department  VARCHAR(50) NULL,
    price decimal (6,2) NULL,
	stock_quanitity INT (9) NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO products values
	(1, "dog bed", "pet", 10.50, 45),
	(2, "chain saw", "zombie killing devices", 99.99, 3),
	(3, "fork", "beauty", 3.75, 6),
    (4, "ginger chews", "health", 4.95, 23),
	(5, "TV", "electronics", 498.99, 5),
	(6, "kong", "Pet", 13.00, 5),
    (7, "crossbow", "zombie killing devices", 68.20, 4),
	(8, "unicorn", "animals", 999.99, 1),
	(9, "curling iron", "beauty", 19.98, 5),
    (10, "mega large dog bed", "Pet", 25.00, 11);