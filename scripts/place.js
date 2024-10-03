const temperature = 27;
const conditions = "Cloudy"
const wind = 8;
let windchill;



document.querySelector("#temperature").innerHTML = `${temperature} °C`;
document.querySelector("#conditions").innerHTML = `${conditions}`;
document.querySelector("#wind").innerHTML = `${wind} km/h`;

if (temperature <= 10 && wind > 4.8) {
    windchill = `${calculateWindChill(temperature, wind).toFixed(0)} °C`;

} else {
    windchill = "N/A"
}

document.querySelector("#windchill").innerHTML = `${windchill}`;

function calculateWindChill(temperature, wind) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temperature * Math.pow(wind, 0.16));
}

// Footer

const currentyear = document.querySelector("#currentyear");
const olastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

olastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;