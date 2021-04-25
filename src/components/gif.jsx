import React, { Component } from 'react';

class Gif extends Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" />
      // TODO: Add an onClick
    );
  }
}

export default Gif;
