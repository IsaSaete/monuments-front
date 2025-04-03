import getApp from "./getApp";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments of the world' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = "Monuments of the world";

      const App = getApp();

      screen.appendChild(App);

      const titleApp = screen.querySelector("h1");

      expect(titleApp).not.toBeNull();
      expect(titleApp?.textContent).toBe(expectedTitle);
    });
  });
});
