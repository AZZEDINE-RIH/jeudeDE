import React, { useState } from "react";

function JeuDe({ cache }) {
  const [face, setFace] = useState(null);
  const [compteur, setCompteur] = useState(0);
  const [fin, setFin] = useState(false);

  const jouer = () => {
    const valeur = Math.floor(Math.random() * 6) + 1;
    setFace(valeur);
    setCompteur(compteur + 1);
    if (valeur === cache) {
      setFin(true);
    }
  };

  const getImage = () => {
    return face ? `./images/face${face}.png` : "./images/Dé.PNG";
  };

  const initialiser = () => {
    setFace(null);
    setCompteur(0);
    setFin(false);
  };

  return (
    <div>
      <h1>Jeu de Dé...</h1>
      <img src={getImage()} style={{ width: "60px", height: "60px" }} alt="Face du dé" />
      <h2>Face: {face || "..."}</h2>
      <h2>Nombre d'essais: {compteur}</h2>
      <button onClick={jouer}>Jouer</button>
      {fin && <p>Bravo! Vous avez trouvé la face cachée {cache}!</p>}
      <button onClick={initialiser}>Initialiser</button>
    </div>
  );
}

export default JeuDe;
