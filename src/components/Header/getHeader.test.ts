import getHeader from "./getHeader";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then ir should show 'Monumnets of the World' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = "Monuments of the world";

      const Header = getHeader();

      screen.appendChild(Header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedTitle);
    });
  });
});
