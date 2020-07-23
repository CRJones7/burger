
$("#place-order").on("click", function (event) {
    event.preventDefault();
    // Make a burger object
    let newBurger = {
        burger_name: $("#burger_name").val().trim(),
    }
});

console.log(newBurger);

$.post("/api/new", newBurger)
    // On success, run the following code
    .then(function () {

        var listItem = $("<ul>");
        listItem.addClass("burg");

        listItem.append("<li>" + newBurger.burger_name + "</li>")

        $("#new-burger-area").prepend(row);

    });