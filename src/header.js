function createHeader() {
    const $contentDiv = document.querySelector('div#content');

    const $headerDiv = document.createElement('header');
    
    const $h1 = document.createElement('h1');
    $h1.textContent = 'SLOGGO RESTAURANT';

    const $nav = document.createElement('nav');

    const $home = document.createElement('p');
    $home.textContent = 'HOME';

    $nav.appendChild($home);

    const $menu = document.createElement('p');
    $menu.textContent = 'MENU';

    $nav.appendChild($menu);

    const $about = document.createElement('p');
    $about.textContent = 'ABOUT';

    $nav.appendChild($about);

    $headerDiv.appendChild($h1);
    $headerDiv.appendChild($nav);

    $contentDiv.appendChild($headerDiv);
}

export {createHeader};