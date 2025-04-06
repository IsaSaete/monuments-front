import Monument from "../types";
import "./Card.css";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.className = "monument-card";

  monumentCard.innerHTML = `
    <img src="${monument.imageUrl}" alt="Monument of ${monument.name}, located in the city of ${monument.city}, ${monument.country}" width="250">
    <h2 class=" monument__name">${monument.name}</h2>
    <p class="monument__description">${monument.description}</p>
    <div class="monument__location">
      <span>City: ${monument.city}</span>
      <span>Country: ${monument.country}</span>
   </div>
`;

  return monumentCard;
};

export default getMonumentCard;
