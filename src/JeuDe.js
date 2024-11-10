import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    const C = this.state.compteur + 1;
    this.setState({
      face: valeur,
      compteur: C,
      fin: valeur === this.props.cache
    });
  }

  getImage() {
    return this.state.face ? `images/face${this.state.face}.png` : "images/Dé.PNG";
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <div>
        <h1>Jeu de Dé...</h1>
        <img src={this.getImage()} style={styleImage} alt="Face du dé" />
        <h2>Face: {this.state.face || "..."}</h2>
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button>
        {this.state.fin && <p>Bravo! Vous avez trouvé la face cachée {this.props.cache}!</p>}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
