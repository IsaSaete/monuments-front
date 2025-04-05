import getHeader from "../Header/getHeader";
import "./App.css";
import getMonumentCardList from "../../monument/MonumentCardList/getMonumentCardList";
import monuments from "../../monument/data/data";

const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const Header = getHeader();

  mainContainer.appendChild(Header);

  const MonumentsList = getMonumentCardList(monuments);
  mainContainer.appendChild(MonumentsList);

  return mainContainer;
};

export default getApp;
