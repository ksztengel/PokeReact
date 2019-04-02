import React, { Component } from 'react';
import './App.css';

class Pokemonlist extends Component {
  render() {
    return (
      <div className="Pokemonlist">
        <header className="Pokemonlist-header">
          <p>
            Gotta catch them all, {this.props.name}!
          </p>
        </header>
      </div>
    );
  }
}

export default Pokemonlist;
