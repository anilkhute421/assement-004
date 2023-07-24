import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement} style={{ backgroundColor: "green", marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={this.handleDecrement} style={{ backgroundColor: "red" }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default CounterComponent;
