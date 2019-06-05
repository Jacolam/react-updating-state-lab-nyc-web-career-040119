// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

  state={
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleClick= (e)=>{

    const settings = this.state.settings
    settings.bitrate = 12

    this.setState({
      settings
    })

  }

  handleResolution=(e)=>{
    const settings = this.state.settings
      settings.video.resolution = '720p'

    this.setState({
      settings
      // settings:{
      //   ...this.state.settings,
      //   video:{
      //     resolution:"720p"
      //   }
      // }
    })

    console.log(this.state)
  }

  render(){
    return(
      <div>
        <button
        onClick={this.handleClick} className='bitrate'
        >bitrate {this.state.settings.bitrate}<
        /button>

        <button
        onClick={this.handleResolution} className='resolution'
        >resolution<
        /button>

      </div>
    )
  }
}

export default YouTubeDebugger
