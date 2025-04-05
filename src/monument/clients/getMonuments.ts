import Monument from "./types";

const getMonuments = async (): Promise<Monument[]> => {
  const response = await fetch(
    "https://monuments-back-q923.onrender.com/monuments",
  );
  const { monuments } = (await response.json()) as { monuments: Monument[] };
  return monuments;
};

export default getMonuments;
