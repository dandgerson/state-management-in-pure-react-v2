import { Component } from "react";

class Counter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState((state) => ({count: state.count + 1}))
    this.setState((state) => ({count: state.count + 1}))
    this.setState((state) => ({count: state.count + 1}))
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  reset = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter">
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
      </div>
    )
  }
}

export default Counter
