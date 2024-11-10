import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  // Fonction pour jouer
  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === this.props.cache, // Vérifie si le dé est égal à la face cachée
    }));
  }

  // Méthode pour obtenir l'image correspondante à la face du dé
  getImage() {
    return `images/face${this.state.face}.png`; // Retourné selon la face du dé
  }

  // Fonction pour réinitialiser l'état
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <div>
        <img src="images/Dé.PNG" alt="Dé" />
        <h1>Jeu de Dé...</h1>
        <h2>Face: {this.state.face}</h2>
        {/* Affichage de l'image de la face du dé */}
        {this.state.face && <img src={this.getImage()} alt={`Face ${this.state.face}`} style={styleImage} />}
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button>

        {/* Affichage du message de victoire si la face cachée est trouvée */}
        {this.state.fin && <p>Bravo, vous avez trouvé la face cachée!</p>}

        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
