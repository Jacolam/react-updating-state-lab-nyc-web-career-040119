// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{

  state={
    timesClicked: 0
  }

  handleClick= e =>{
    this.setState({
      timesClicked:this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <div>
      <button onClick={this.handleClick}>
      {this.state.timesClicked}
      </button>
      </div>
    )
  }

}

export default DigitalClicker
