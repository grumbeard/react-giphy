import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGifFunction) {
      const regex = /media\/(?<gifId>\b\w+)\/giphy/;
      const src = event.target.attributes.src.value;
      const selectedGifId = src.match(regex).groups.gifId;
      this.props.selectGifFunction(selectedGifId);
    }
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
