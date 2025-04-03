import getHeader from "../Header/getHeader";
import "./App.css";

const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const Header = getHeader();

  mainContainer.appendChild(Header);

  return mainContainer;
};

export default getApp;
