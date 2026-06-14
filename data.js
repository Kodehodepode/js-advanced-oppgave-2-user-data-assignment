// Global datastruktur for innhold.
let fridge = [];

// Operasjoner på data

const sync = () => {
    // For enkelhetsskyld samles disse tre ofte repeterte operasjonene i en sync() funksjon
    saveAll();
    loadAll(); // Kanskje ikke nødvendig her, men trygt å ha. Mer relevant ved bruk av en back-end kanskje.
    renderPage();
};

const saveAll = () => {
    localStorage.setItem("fridge", JSON.stringify(fridge));
};

const loadAll = () => {
    fridge = JSON.parse(localStorage.getItem("fridge"));
    if (!fridge) {
        fridge = [];
    }
};

const deleteOne = (index) => {
    fridge.splice(index, 1);
};

const deleteAll = () => {
    fridge = [];
};

const filters = {
    all: (fridgeItem) => {
        return fridgeItem;
    },
    expired: (fridgeItem) => {
        /* 
            Sammenligner dagen i dag med utgåttdato på produkt.

            Først må datatypene samsvare (konverteres til millisekunder).
            Dagens dato settes til slutten av døgnet, slik at produkter ikke er utgått før dagen er over.
        */

        const expires = new Date(fridgeItem.expires).valueOf(); // Konverterer "YYYY-MM-DD" til millisekunder
        const today = new Date().setHours(23, 59, 59, 999); // Dagens dato i millisekunder, men ved midnatt

        return expires < today;
    },
    notExpired: (fridgeItem) => {
        // Inkluderer varer som går ut i dag, igjen settes dagens klokke til midnatt.
        const expires = new Date(fridgeItem.expires).valueOf();
        const today = new Date().setHours(23, 59, 59, 999);

        // Sammenligningstegnet snus
        return expires < today;
    },
};

const countExpired = () => {
    // Teller utgåtte produkter. Dette kunne gjøres ved å bruke .filter og .length, men jeg prøver meg på reduce.
    const count = fridge.reduce((count, fridgeItem) => {
        return filters.expired(fridgeItem) ? ++count : count;
    }, 0);

    return count;
};

const sortProductDescending = () => {
    fridge = fridge.sort((a, b) => a.product > b.product);
};

const sortProductAscending = () => {
    fridge = fridge.sort((a, b) => a.product < b.product);
};

const sortQuantityDescending = () => {
    fridge = fridge.sort((a, b) => a.quantity > b.quantity);
};

const sortQuantityAscending = () => {
    fridge = fridge.sort((a, b) => a.quantity < b.quantity);
};

const sortExpiresDescending = () => {
    fridge = fridge.sort((a, b) => a.expires > b.expires);
};

const sortExpiresAscending = () => {
    fridge = fridge.sort((a, b) => a.expires < b.expires);
};
