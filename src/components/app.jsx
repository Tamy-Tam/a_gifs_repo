import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = 'RsvpNyuJ5DJNWvSOO2BYXCAISLNtXxV2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "hmDKEVDxaWn2U"
      // TODO: Add a new state
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
    // this.search('disney dancing');
  }

  search = (query) => {
    // API Call
    giphy('RsvpNyuJ5DJNWvSOO2BYXCAISLNtXxV2').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  // TODO: Have a new function passing to the children
  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
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
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
