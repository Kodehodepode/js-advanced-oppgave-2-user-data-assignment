// Hent referanser til relevante HTML elementer
const fridgeTable = document.getElementById("fridge-table");
const fridgeBody = document.getElementById("fridge-body"); // Hovedinnhold i tabell
const fridgeFooter = document.getElementById("fridge-footer"); // Status / statistikk nederst i tabell

const sumProducts = document.getElementById("sum-products"); // Viser antall produkter
const sumExpired = document.getElementById("sum-expired"); // Viser antall utgåtte produkter

const addProductForm = document.getElementById("add-product-form");

const addProductButton = document.getElementById("add-product-button"); // Knapp som åpner dialog med skjema
const addProductDialog = document.getElementById("add-product-dialog");

// const editProductButton = document.getElementById("edit-product-button"); // Lages dynamisk
const editProductDialog = document.getElementById("edit-product-dialog");
const editProductForm = document.getElementById("edit-product-form");
const editProductIndex = document.getElementById("edit-product-index"); // skjult input i skjema i dialog
const editProductInput = document.getElementById("edit-product-input");
const editQuantityInput = document.getElementById("edit-quantity-input");
const editExpiresInput = document.getElementById("edit-expires-input");

const emptyFridgeButton = document.getElementById("empty-fridge-button"); // Sletter allt innhold
const filterProductsButton = document.getElementById("filter-products-button"); // Vis kun utgåtte varer
const sortProductsButton = document.getElementById("sort-products-button");
const sortQuantityButton = document.getElementById("sort-quantity-button");
const sortExpiresButton = document.getElementById("sort-expires-button");

addProductForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(addProductForm);

    // const { product, epxires } = {formData.get("product"), formData.get("expires"); }
    // Kanskje vi kan hente objekt fra formData instedet? Ja, fromEntries er en metode på Object prototypen:
    // const { product, expires } = Object.fromEntries(formData);
    const fridgeItem = Object.fromEntries(formData);
    fridge.push(fridgeItem);
    sync();

    addProductDialog.removeAttribute("open");
});

editProductForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(editProductForm);
    const { index, ...fridgeItem } = Object.fromEntries(formData);

    fridge[index] = fridgeItem;
    sync();

    editProductDialog.removeAttribute("open");
});

addProductButton.addEventListener("click", (event) => {
    addProductDialog.setAttribute("open", true);
});

emptyFridgeButton.addEventListener("click", (event) => {
    deleteAll();
    sync();
});

filterProductsButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("applied")) {
        renderPage();
        event.target.classList.remove("applied");
    } else {
        renderPage(filters.expired);
        event.target.classList.add("applied");
    }
});

sortProductsButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("ascending")) {
        sortProductDescending();
        event.target.classList.remove("ascending");
        sync();
    } else {
        sortProductAscending();
        event.target.classList.add("ascending");
        sync();
    }
});

sortQuantityButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("ascending")) {
        sortQuantityDescending();
        event.target.classList.remove("ascending");
        sync();
    } else {
        sortQuantityAscending();
        event.target.classList.add("ascending");
        sync();
    }
});

sortExpiresButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("ascending")) {
        sortExpiresDescending();
        event.target.classList.remove("ascending");
        sync();
    } else {
        sortExpiresAscending();
        event.target.classList.add("ascending");
        sync();
    }
});

const renderPage = (filter = filters.all) => {
    buildPage(fridge.filter(filter));
};

loadAll(); // Laster inn data ved første sidevisning

renderPage();
