import React from 'react';
import './App.css';
import Counter from './Compenent/Counter/Counter';


class App extends React.Component {

  state = {
    start: false
  }

  handleToggle = () => {
    this.setState({
      start: true
    })
  }

  render() {
    return (
      <div className="App" >
         <button onClick={this.handleToggle} >Start</button>
        {this.state.start ? (
          <Counter />
        ) : null
        }
      
      </div>
    );
  }
}

export default App;
