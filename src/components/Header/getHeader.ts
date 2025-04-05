import "./Header.css";

const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
  <h1 class="app__title">Monuments<span class="app__subtitle"> of the world</span></h1>
  <nav>
    <ul class="nav-list">
      <li><a class="nav-list__link" href="/monuments">Monuments</a></li>
    </ul>
  </nav>
`;

  const links = header.querySelectorAll("a");

  links.forEach((link) => {
    const currentUrl = window.location.href;

    if (link.href === currentUrl) {
      link.classList.add("nav-menu__link--active");
    }
  });

  return header;
};

export default getHeader;
