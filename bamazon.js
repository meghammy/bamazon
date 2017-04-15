var mysql = require("mysql");
var inquirer = require("inquirer");


// database parameters
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pepper1!",
    database: "bamazonDB",
});

// database connection
connection.connect(function(err) {
    if (err) {
        console.log(err);
    }
});

// perform query to retrieve items from store
var display = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) {
            console.log(err);
        }
        //loop through all products
        for (var i = 0; i < res.length; i++) {
            if (err) { console.log(err); }

            console.log(
                "#" + results[i].id +
                "\nproduct_name: " + results[i].product_name +
                "\nprice: $" + results[i].price +
                "\nQuantity in stock: " + results[i].stock_quanitity);
        }
    });

    purchase();
};
}
//function that will show products in store

//function to purchase a product by ID
var purchase = function() {
        inquirer.prompt([{
            name: "id",
            type: "input",
            messsage: "Please enter ID of product you wish to purchase"
        }, {
            name: "stock_quanitity",
            type: "input",
            message: "How many would you like?"

        }]).then(function(answer) {
                var currentItem = answer.id;
                var currentAmount = answer.stock_quanitity;

                connection.query("SELECT stock_quanitity FROM products WHERE id=" + id, function(err, res) {
                        //calculate new quanities for stock_quanitity
                        var totalStock = res[0].stock_quanitity;
                        var newQuantity = totalStock - currentAmount;
                        var totalCost = res[0].Price * currentAmount;
                        // if store has quanity needed
                        if (totalStock > 0 && newQuantity >= 0) {

                            console.log("Purchasing product amount");
                            connection.query("UPDATE products SET stock_quanitity=" + newQuantity +
                                "WHERE id=" + id,
                                function(err, res) {

                                });
                        } else { // If stock is < than desired amount
                            console.log("We can't have enough stock for that purchase!");

}

}
}
}

                        });
                });
        }
        purchase();
