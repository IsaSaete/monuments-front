import getHeader from "./getHeader";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then ir should show 'Monumnets of the World' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = "Monuments of the World";

      const Header = getHeader();

      screen.appendChild(Header);

      const titleHeader = screen.querySelector("h1");

      expect(titleHeader).not.toBeNull();
      expect(titleHeader?.textContent).toBe(expectedTitle);
    });
  });
});
