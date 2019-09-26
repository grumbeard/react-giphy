import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "1d7F9xyq6j7C1ojbC5"
    };

    this.search("homer thinking");
  }

  // API call to GIPHY
  search = (query) => {
    giphy('uuoNK5HDIxvQ8VXx8nvCogpFzIBavzxd').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // Result = gif data
      // Needs to be arrow function so 'this' remains in callback
      this.setState({
        gifs: result.data
      });
    });
  }

  // Function to change selected GIF
  selectGif = (gifId) => {
    this.setState({ selectedGifId: gifId });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
