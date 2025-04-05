import Monument from "../types";
import getMonumentCard from "../MonumentCard/getMonumentCard";
import "./CardList.css";

const getMonumentCardList = (monuments: Monument[]): HTMLElement => {
  const cardMonumentList = document.createElement("ul");
  cardMonumentList.className = "monument-list";

  monuments.forEach((monument) => {
    const monumentWrapper = document.createElement("li");

    const monumentCard = getMonumentCard(monument);

    monumentWrapper.appendChild(monumentCard);
    cardMonumentList.appendChild(monumentWrapper);
  });

  return cardMonumentList;
};

export default getMonumentCardList;
