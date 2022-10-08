import { Component } from "react";

const increment = (state, props) => {
  console.log({ props });
  const { max, step } = props;
  if (state.count >= max) return;
  return { count: state.count + step };
};

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(increment);
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

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
