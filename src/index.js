import {createHeader, $contentDiv} from './header.js';
import {createHome} from './home.js'

console.log('start');

createHeader()
createHome()

const $homeButton = document.querySelector('p#home')

$homeButton.addEventListener('click', (e) => {
    $contentDiv.innerHTML = '';

    createHeader()
    createHome()
})