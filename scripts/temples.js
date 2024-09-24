// Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.classList.toggle('open');
});

const navPages= document.querySelectorAll('a');
const h2 = document.querySelector('h2');

navPages.forEach(function(page) {

    page.addEventListener('click', () => {

        navPages.forEach(function(element) {
                element.classList.remove('active')
        });

        page.classList.toggle('active');
        h2.innerHTML = `<span>${page.title}</span>`;
    });

});


// Footer

const currentyear = document.querySelector("#currentyear");
const olastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

olastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;



