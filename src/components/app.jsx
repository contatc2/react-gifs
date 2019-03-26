import React, { Component } from 'React';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}


export default App;
