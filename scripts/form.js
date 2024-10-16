const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function createProducts(products) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.setAttribute("value", product.id);
        option.setAttribute("id", product.name.replaceAll(" ", "-"))
        option.textContent = capitalize(product.name);
        document.querySelector("#products").appendChild(option);
    });
}

const page = document.querySelector("#pageName");

if ( page.classList.contains("form-page")) {

    createProducts(products);

} else {

    const params = new URLSearchParams(window.location.search);
        
    let reviewCount = localStorage.getItem("reviewCount");
            
    if (!reviewCount) {
        reviewCount = 0;
    } 

    if (params.size != 0 && params.has("products") && params.has("date") && params.has("stars")) {

        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
    }

    document.getElementById("reviewCount").textContent = reviewCount;
}

// Footer

const currentyear = document.querySelector("#currentyear");
const olastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

olastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;
