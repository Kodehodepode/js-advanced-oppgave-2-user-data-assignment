# User Data Assignment: Personlig Data Dashboard

## Oppgavebeskrivelse:

I denne oppgaven skal du bygge en applikasjon som håndterer og manipulerer brukerdata ved hjelp av **localStorage**. Applikasjonen skal kunne lagre, filtrere, sortere og analysere data på en effektiv måte.

Du skal lage et **personlig data dashboard** hvor brukeren kan lagre og organisere informasjon relatert til en bestemt hobby, et prosjekt eller en personlig interesse. Eksempler inkluderer:

* **Treningsplanlegger/logg:** Brukeren registrerer økter, type trening, tid brukt og eventuell progresjon.
* **Boklesing:** En applikasjon for å holde oversikt over leste bøker, favorittsjangre og anbefalinger.
* **Film- eller serieliste:** Et system for å logge hvilke filmer og serier som er sett, samt gi vurderinger.
* **Oppskriftsarkiv:** En matlagingsapp der brukeren kan lagre og organisere oppskrifter etter kategori og ingredienser.
* **Kunstportefølje:** En digital oversikt over tegninger, malerier eller digitale verk.

Du skal utfordres til å bruke metoder som **map(), filter(), sort() og reduce()** for å manipulere og presentere dataene på en brukervennlig måte. I tillegg anbefales det å bruke **destructuring** for å hente ut relevante verdier fra objekter og arrays på en effektiv måte.

## Krav til funksjonalitet:

1. Legg til data
  * Brukeren skal kunne legge inn nye dataelementer med relevant informasjon.
  * Dataene lagres i localStorage.
2. Oppdatering og markering:
  * Brukeren skal kunne oppdatere eller endre et eksisterende dataelement.
  * Eventuelt markere elementer som favoritt, anbefalt eller en annen passende status.
3. Sletting av data
  * Brukeren skal kunne slette et enkelt dataelement eller alle elementer.
4. Filtrering og sortering:
  * Bruk `filter()` for å la brukeren filtrere elementer basert på spesifikke kriterier.
  * Bruk `sort()` for å gi brukeren muligheten til å sortere dataene, for eksempel alfabetisk, etter dato eller annen relevant kategori.
5. Statistikk og analyse (Bonusoppgave):
  * Bruk `reduce()` for å generere en oppsummering av dataene, for eksempel total tid brukt på trening eller antall bøker lest per sjanger.
6. Bruk av destructuring:
  * Bruk destructuring for å hente ut data fra objekter og arrays.
  * Eksempel: ```javascript
const data = {
  id: "1a2b3c",
  bookTitle: "Sult",
  author: "Knut Hamsun",
  genre: "Roman",
  pages: 250
};

const { bookTitle, author, genre, pages } = data;
console.log(`${bookTitle} av ${author}, sjanger: ${genre}, sider: ${pages}`);```

## Tekniske krav:

* **Bruk localStorage** til å lagre.
* **Bruk map(), filter(), sort(), reduce()** til å manipulere dataene.
* **Bruk destructuring** for enklere datahåndtering.
* **Bruk event listeners** for å håndtere input.
* **Lag en enkel, men intuitiv UI** der data kan legges til, vises, filtreres og slettes.

## Forslag til oppbygning av dataobjekter i localStorage:
```javascript
[
  {
    "id": "1a2b3c",
    "bookTitle": "Sult",
    "author": "Knut Hamsun",
    "genre": "Roman",
    "pages": 250
  },
  {
    "id": "4d5e6f",
    "bookTitle": "Dune",
    "author": "Frank Herbert",
    "genre": "Science Fiction",
    "pages": 412
  }
]
```

## Leveringskrav:

* **Kode i en GitHub-repo** med en README som forklarer funksjonaliteten.
* **GitHub Pages deployment** slik at løsningen kan testes live.
* **Kommentarer**

Lykke til! 🚀
