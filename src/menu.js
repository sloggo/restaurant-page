import { $contentDiv } from "./header.js";

function createMenu() {

    const $menuContainer = document.createElement('div')
    $menuContainer.classList.add('menuContainer');

    $menuContainer.innerHTML = `
    <div class="card" id="one">
        <div class="cardText">
            <h1>Burger</h1>
            <p>Delicious burger!</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="two">
        <div class="cardText">
            <h1>Burger</h1>
            <p>Delicious burger!</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="three">
        <div class="cardText">
            <h1>Burger</h1>
            <p>Delicious burger!</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="four">
        <div class="cardText">
            <h1>Burger</h1>
            <p>Delicious burger!</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="five">
        <div class="cardText">
            <h1>Burger</h1>
            <p>Delicious burger!</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="six">
        <div class="cardText">
            <h1>Burger</h1>
            <p>Delicious burger!</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="seven">
        <div class="cardText">
            <h1>Item</h1>
            <p>Item desc</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>

    <div class="card" id="eight">
        <div class="cardText">
            <h1>Item</h1>
            <p>Item desc</p>
        </div>
        <img src="./assets/burgerwelcome.png">
    </div>`

    $contentDiv.appendChild($menuContainer)
}

export {createMenu}