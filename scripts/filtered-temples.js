// Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.classList.toggle('open');
});

const h2 = document.querySelector('h2');
const navPages= document.querySelectorAll('a');

navPages.forEach(function(page) {

    page.addEventListener('click', () => {

        navPages.forEach(function(element) {
                element.classList.remove('active')
        });

        page.classList.toggle('active');
        h2.innerHTML = `<span>${capitalize(page.id)}</span>`;
    });

});

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

const temples = [
    {
        templeName: 'Aba Nigeria',
        location: 'Aba, Nigeria',
        dedicated: '2005, August, 7',
        area: 11500,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg'
    },
    {
        templeName: 'Manti Utah',
        location: 'Manti, Utah, United States',
        dedicated: '1888, May, 21',
        area: 74792,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg'
    },
    {
        templeName: 'Payson Utah',
        location: 'Payson, Utah, United States',
        dedicated: '2015, June, 7',
        area: 96630,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg'
    },
    {
        templeName: 'Yigo Guam',
        location: 'Yigo, Guam',
        dedicated: '2020, May, 2',
        area: 6861,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg'
    },
    {
        templeName: 'Washington D.C.',
        location: 'Kensington, Maryland, United States',
        dedicated: '1974, November, 19',
        area: 156558,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg'
    },
    {
        templeName: 'Lima Perú',
        location: 'Lima, Perú',
        dedicated: '1986, January, 10',
        area: 9600,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg'
    },
    {
        templeName: 'Mexico City Mexico',
        location: 'Mexico City, Mexico',
        dedicated: '1983, December, 2',
        area: 116642,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg'
    },
    {
        templeName: 'Asunción Paraguay',
        location: 'Asuncion, Alto Paraguay, Paraguay',
        dedicated: '2022, May, 19',
        area: 11906,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg'
    },
    {
        templeName: 'Billings Montana Temple',
        location: 'Billings, Montana, United States',
        dedicated: '1996, August, 30',
        area: 33800,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/01-Billings-Montana-Temple-2220702.jpg'
    },
    {
        templeName: 'Bern Switzerland',
        location: 'Zollikofen, Bern, Switzerland',
        dedicated: '2010, June, 13',
        area: 35546,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg'
    },
];

function createCardTemplate (filteredTemples) {
    document.querySelector('#temples').innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class='label'>LOCATION:</span> ${temple.location}`;
        dedication.innerHTML = `<span class='label'>DEDICATED:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class='label'>SIZE:</span> ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector('#temples').appendChild(card);
    });
}

createCardTemplate(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector('#old');
const onewLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function getYear(date) {
    return date.split(',')[0].trim();
}
// Filters

// Old - temples built before 1900
oldLink.addEventListener('click', () => {
    createCardTemplate(temples.filter(temple => (getYear(temple.dedicated) < 1900)));
});

// New - temples built after 2000
onewLink.addEventListener('click', () => {
    createCardTemplate(temples.filter(temple => (getYear(temple.dedicated) > 2000)));
});

// Large - temples larger than 90000 square feet
largeLink.addEventListener('click', () => {
    createCardTemplate(temples.filter(temple => (temple.area > 90000)));
});

// Small - temples smaller than 10000 square feet
smallLink.addEventListener('click', () => {
    createCardTemplate(temples.filter(temple => (temple.area < 10000)));
});

// Home - displays all the temples stored in the array.
homeLink.addEventListener('click', () => {
    createCardTemplate(temples);
});

// Footer

const currentyear = document.querySelector('#currentyear');
const olastModified = document.querySelector('#lastModified');

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

olastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;
