import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };

  decrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="card">
        <div className="header">
          <h1>{this.state.counter}</h1>
        </div>

        <div className="container">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
          <button className="minus" onClick={this.decrementCounter}>
            -
          </button>
          <button className="plus" onClick={this.incrementCounter}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
