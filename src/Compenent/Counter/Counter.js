import React, { Component } from 'react';

class Counter extends Component {
    state = {
        sec: 0,
        min: 0,
        hr: 0

      }
    
      handleClickChrono = () => {
        if (this.state.sec < 60)
           {this.setState({
                sec: this.state.sec + 1
            })}
            else if (this.state.sec === 60 && this.state.min < 60)
            {this.setState({
            sec: 0,
              min: this.state.min + 1
             
          })}
          else if (this.state.min === 60)
          {this.setState({
            min: 0,
            hr: this.state.hr + 1
          
        })}
    }
    
      componentDidMount = () => {
        var myVar = setInterval(this.handleClickChrono, 1000);
        return myVar;
      }
      handleClickStopTime = () => {
    var myVar = setInterval(this.handleClickChrono, 1000);
    clearInterval(myVar);
  }
      handleClickRestart  = () => {
        this.setState({
          sec: 0,
          min: 0,
          hr: 0
        })
      }

    render() {
        return (
            <div>
       < span style={{margin:"20px"}}>{this.state.hr}</span>
        < span style={{margin:"20px"}}>{this.state.min}</span>
         < span style={{margin:"20px"}}>{this.state.sec}</span>
         <button  onClick={this.handleClickRestart}>Restart</button>
            </div>
        );
    }
}

export default Counter;
