import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  clicker = this.state.timesClicked

  handleClick = (e) => {
    this.setState({
      timesClicked: this.clicker+=1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.clicker}</button>
      </div>
    )
  }
}
