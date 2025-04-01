import getApp from "./getApp";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments of the world' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = "Monuments of the World";

      const App = getApp();

      screen.appendChild(App);

      const header = screen.querySelector("header");
      const titleHeader = header?.querySelector("h1");

      expect(header).not.toBeNull();
      expect(titleHeader?.textContent).toBe(expectedTitle);
    });
  });
});
