import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  changeBitrate = (e) => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }
  changeResolution = (e) => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button className="bitrate" onClick={this.changeBitrate}>bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>resolution</button>
      </div>
    )
  }
}
