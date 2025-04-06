import { elCaminante, hombreAvion, tomateGigante } from "../fixtures";
import getMonumentCard from "./getMonumentCard";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given a MonumentCard component", () => {
  describe("When it receives a 'El Caminante'", () => {
    test("Then it should show a'El Caminante' inside a heading", () => {
      const expectedNameMonument = "El Caminante";

      const MonumentCard = getMonumentCard(elCaminante);

      screen.appendChild(MonumentCard);

      const nameMonument = screen.querySelector("h2");

      expect(nameMonument).not.toBeNull();
      expect(nameMonument?.textContent).toBe(expectedNameMonument);
    });

    test("Then it should show an image of the monument 'El Caminante'", () => {
      const expectedDescriptionImage = `Monument of ${elCaminante.name}, located in the city of ${elCaminante.city}, ${elCaminante.country}`;

      const MonumentCard = getMonumentCard(elCaminante);

      screen.appendChild(MonumentCard);

      const imageMonument = screen.querySelector("img");

      expect(imageMonument).not.toBeNull();
      expect(imageMonument?.alt).toBe(expectedDescriptionImage);
    });

    test("Then it should show a text with the description of the monument 'El Tomate Gigante'", () => {
      const expectedDescription = tomateGigante.description;

      const MonumentCard = getMonumentCard(tomateGigante);

      screen.appendChild(MonumentCard);

      expect(screen.textContent).toContain(expectedDescription);
    });

    test("Then it should show a text with location of the monument 'El Hombre Avion'", () => {
      const expectedLocation = `
      City: ${hombreAvion.city}
      Country: ${hombreAvion.country}`;

      const MonumentCard = getMonumentCard(hombreAvion);

      screen.appendChild(MonumentCard);

      expect(screen.textContent).toContain(expectedLocation);
    });
  });
});
