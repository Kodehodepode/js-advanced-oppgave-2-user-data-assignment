const productElement = (product) => {
    // Lager en celle med et produktnavn
    const productElement = document.createElement("td");
    productElement.classList.add("product");
    productElement.textContent = product;
    return productElement;
};

const quantityElement = (quantity) => {
    // Lager en celle med et produktnavn
    const quantityElement = document.createElement("td");
    quantityElement.classList.add("quantity");
    quantityElement.textContent = quantity;
    return quantityElement;
};

const expiresElement = (expires) => {
    // Lager en celle med datoen et produkt utgår på
    const expiresElement = document.createElement("td");
    expiresElement.classList.add("expires");
    expiresElement.textContent = expires;
    return expiresElement;
};

const deleteElement = () => {
    const deleteElement = document.createElement("button");
    deleteElement.classList.add("delete");
    deleteElement.textContent = "Delete";
    deleteElement.addEventListener("click", (event) => {
        /* 
            For å finne ut hvilken index som skal slettes, finner vi indexen av raden i tabellen hvor sletteknappen ble trykket på.
            Her brukes en operatoren for å caste en NodeList (fått fra .children metoden) til et array, slik at indexOf kan brukes på det.

            event.target.closest("tr") finner den nærmeste raden (tr-elementet) overstående knappen som trykkes på, raden som skal slettes.
        */

        const index = [...fridgeBody.children].indexOf(
            event.target.closest("tr"),
        );

        deleteOne(index); // Slett ett element, fra og med funnet index.

        sync();
    });
    return deleteElement;
};

const editElement = () => {
    const editElement = document.createElement("button");
    editElement.classList.add("edit");
    editElement.textContent = "Edit";
    editElement.addEventListener("click", (event) => {
        // Se deleteElement() for lengre forklaring
        const index = [...fridgeBody.children].indexOf(
            event.target.closest("tr"),
        );

        editProductIndex.value = index;
        editProductInput.value = fridge[index].product;
        editQuantityInput.value = fridge[index].quantity;
        editExpiresInput.value = fridge[index].expires;

        editProductDialog.setAttribute("open", true);
    });

    return editElement;
};

const buildPage = (fridgeItems) => {
    fridgeBody.replaceChildren(); // Sletter nåværende innhold for å unngå duplikater

    // Legg til en rad i tabellen for hvert produkt som skal være med
    for (const fridgeItem of fridgeItems) {
        const { product, quantity, expires } = fridgeItem;

        const rowElement = document.createElement("tr");

        // Celle med produktnavn
        rowElement.append(productElement(product));

        // Celle med antall
        rowElement.append(quantityElement(quantity));

        // Celle med dato
        rowElement.append(expiresElement(expires));

        // Kolonne med knapp(er?)
        const buttonsElement = document.createElement("td");

        // Slette-knapp og slettefunksjon (kort)
        buttonsElement.append(deleteElement(), editElement());

        rowElement.append(buttonsElement);

        fridgeBody.append(rowElement);
    }

    // Statistikk på bunnen av tabellen
    sumProducts.textContent = fridge.length;

    sumExpired.textContent = countExpired(); // Eventuetl fridge.filter(filters.expired).length;
};
