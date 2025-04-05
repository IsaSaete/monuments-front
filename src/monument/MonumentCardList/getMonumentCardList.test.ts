import { elCaminante, hombreAvion, tomateGigante } from "../fixtures";
import getMonumentCardList from "./getMonumentCardList";

describe("Gicen a MonumentCardsList component", () => {
  describe("When it receives El Caminante, El hombre avion y  Tomate gigante", () => {
    test("Then it shoul show 'El Caminante', 'El hombre avión' y 'Tomate Gigante' inside a heading each", () => {
      const screen = document.createElement("div");
      const monuments = [elCaminante, hombreAvion, tomateGigante];

      const MonumentCardList = getMonumentCardList(monuments);

      screen.appendChild(MonumentCardList);

      const monumentNames = screen.querySelectorAll("h2");

      monumentNames.forEach((monumentName, index) => {
        expect(monumentName.textContent).toBe(monuments[index].name);
      });
    });
  });
});
