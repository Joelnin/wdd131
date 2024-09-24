const pi = 3.14;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * pi;
    return area;
}

area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);

let reveal = document.querySelector('#reveal');

reveal.textContent = 'coso nada';
console.log('reveal1', reveal);
reveal.innerHTML = 'coso nada';
console.log('reveal2', reveal);
reveal.text = 'coso nada'
console.log('reveal3', reveal);
reveal.HTMLvalue = 'coso nada';
console.log('reveal4', reveal);

