import getHeader from "./getHeader";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Monumets of the world' inside a heading", () => {
      const expectedTitle = "Monuments of the world";

      const Header = getHeader();

      screen.appendChild(Header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedTitle);
    });

    test("Then it should show a 'Monuments' link", () => {
      const expectedLinkText = "Monuments";

      const Header = getHeader();

      screen.appendChild(Header);

      const link = screen.querySelector("a");

      expect(link).not.toBeNull();
      expect(link?.textContent).toBe(expectedLinkText);
    });
  });
});
