import "./Header.css";

const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.className = "main-header";

  header.innerHTML = `<h1 class="title-header">Monuments <span class="subtitle-header">of the world</span></h1>`;

  return header;
};

export default getHeader;
