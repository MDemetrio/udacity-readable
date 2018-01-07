import React, { Component } from 'react';


class CategoriePage extends Component {
  render() {
    return (
      <div>
        <h1>Categorie {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default CategoriePage;
