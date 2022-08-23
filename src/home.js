function createHome() {
    const $contentDiv = document.querySelector('div#content');
    
    const $welcomeContainer = document.createElement('div');
    $welcomeContainer.id = 'welcomeContainer';
    const $welcomeHeader = document.createElement('div');
    $welcomeHeader.id = 'welcomeHeader';

    const $hOne = document.createElement('h2');
    $hOne.textContent = 'The';
    $welcomeHeader.appendChild($hOne);

    const $hTwo = document.createElement('h2');
    $hTwo.textContent = 'All';
    $hTwo.classList.add('emphasis1');
    $welcomeHeader.appendChild($hTwo);

    const $hThree = document.createElement('h2');
    $hThree.textContent = 'New';
    $hThree.classList.add('emphasis2');
    $welcomeHeader.appendChild($hThree);

    const $hFour = document.createElement('h2');
    $hFour.textContent = 'Burger';
    $welcomeHeader.appendChild($hFour);

    $welcomeContainer.appendChild($welcomeHeader)

    const $burgerImg = document.createElement('img');
    $burgerImg.src = './assets/burgerWelcome.png';

    $welcomeContainer.appendChild($burgerImg);

    $contentDiv.appendChild($welcomeContainer)
}

export {createHome};