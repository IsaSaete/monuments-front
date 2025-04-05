import Monument from "../types";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.className = "card";

  const monumentName = document.createElement("h2");
  monumentName.className = "monument-name";
  monumentName.textContent = monument.name;

  monumentCard.appendChild(monumentName);

  return monumentCard;
};

export default getMonumentCard;
