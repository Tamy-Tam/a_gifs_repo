import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    // Change the state
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img
        src={src}
        className="gif"
        // TODO: Add an onClick
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
