import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  return gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />);
};

export default GifList;
