import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
      // TODO: Add a new state
    };
    this.search('disney dancing');
  }

 // TODO: Have a new function passing to the children

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


  render() {
    const gifs = [
      { id: 'xT9IgDEI1iZyb2wqo8' },
      { id: 'vKTkbOYdIPYmQ' },
      { id: '12fegBdilUKCRy' }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
