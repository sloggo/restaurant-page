import {createHeader, $contentDiv} from './header.js';
import {createHome} from './home.js'
import {createMenu} from './menu.js'

console.log('start');

createHeader()
createHome()

function homeButtonEvent(but) {
    but.addEventListener('click', (e) => {
        $contentDiv.innerHTML = '';
    
        createHeader()
        createHome()
    })
}

function menuButtonEvent(but) {
    but.addEventListener('click', (e) => {
        $contentDiv.innerHTML = '';
    
        createHeader()
        createMenu()
    })
}

export{homeButtonEvent, menuButtonEvent}