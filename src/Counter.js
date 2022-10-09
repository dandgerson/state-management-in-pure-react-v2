import { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };

  reset = () => {
    this.setState(() => ({ count: 0 }));
  };

  componentDidUpdate() {
    setTimeout(() => {
      console.log(`Count: ${this.state.count}`);
    }, 3000);
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <div className="count">{count}</div>
        <div className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
