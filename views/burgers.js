module.exports = function (props) {
    const { burgers } = data;
    return `
    <img src="burger4.png" alt="burger image" style="width: 20%;">
        <h1>Eat-Da-Burger</h1>
        <ul>
        ${props.data.map(newBurger => {
        return `
            <li>
              <p>
                ${newBurger.burger_name}. ${newBurger.devour}
                
              </p>
            </li>
            <button data-planid="${newBurger.id}" class="delplan">Devour Burger!</button>
            `
    }).join("\n")}
        </ul>
    </div>
        <input id="order-field" type="burger name" name="typeOfBurger">
        <button id="place-order" style="display: block;">Place Order</button>`
}