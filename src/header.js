import { homeButtonEvent, menuButtonEvent } from "./index.js";

const $contentDiv = document.querySelector('div#content');

function createHeader() {

    const $headerDiv = document.createElement('header');
    
    const $h1 = document.createElement('h1');
    $h1.textContent = 'SLOGGO RESTAURANT';

    const $nav = document.createElement('nav');

    const $home = document.createElement('p');
    $home.id = 'home';
    $home.textContent = 'HOME';
    homeButtonEvent($home);

    $nav.appendChild($home);

    const $menu = document.createElement('p');
    $menu.id = 'menu';
    $menu.textContent = 'MENU';
    menuButtonEvent($menu)

    $nav.appendChild($menu);

    const $about = document.createElement('p');
    $about.id = 'about';
    $about.textContent = 'ABOUT';

    $nav.appendChild($about);

    $headerDiv.appendChild($h1);
    $headerDiv.appendChild($nav);

    $contentDiv.appendChild($headerDiv);
}

export {createHeader, $contentDiv};