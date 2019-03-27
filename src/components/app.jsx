import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
    };
  }

  search = (query) => {
    giphy('G8O3prXJfRLOxy40JgPr7gdkBetnlDRH').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId } = this.state;
    const { gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} selectGif={this.selectGif} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
