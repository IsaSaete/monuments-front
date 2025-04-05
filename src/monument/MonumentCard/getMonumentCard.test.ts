import { elCaminante } from "../fixtures";
import getMonumentCard from "./getMonumentCard";

describe("Given a MonumentCard component", () => {
  describe("When it receives a 'El Caminante'", () => {
    test("Then it should show a'El Caminante' inside a heading", () => {
      const screen = document.createElement("div");

      const expectedNameMonument = elCaminante.name;

      const MonumentCard = getMonumentCard(elCaminante);
      screen.appendChild(MonumentCard);

      const nameMonument = screen.querySelector("h2");

      expect(nameMonument).not.toBeNull();
      expect(nameMonument?.textContent).toBe(expectedNameMonument);
    });
  });
});
