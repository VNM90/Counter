import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Counter extends Component {
  state = {
    counter: this.props.counter
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "this-state-counter",
      JSON.stringify(nextState.counter)
    );
  }

  componentWillMount() {
    localStorage.getItem("this-state-counter") &&
      this.setState({
        counter: JSON.parse(localStorage.getItem("this-state-counter"))
      });
  }

  componentDidMount() {
    const lastState = JSON.parse(localStorage.getItem("this-state-counter"));

    if (lastState === null) return;

    this.setState(this.lastState);
  }

  componentWillUnmount() {
    localStorage.setItem("this-state-counter", JSON.stringify(this.state));
  }

  incHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  incHandler5 = () => {
    this.setState({
      counter: this.state.counter + 5
    });
  };

  decHandler5 = () => {
    this.setState({
      counter: this.state.counter - 5
    });
  };

  resetButton = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.counter}</h1>
          <button className="btn btn-danger" onClick={this.decHandler}>
            -
          </button>
          <button className="btn btn-success" onClick={this.incHandler}>
            +
          </button>
          <button className="btn btn-danger" onClick={this.decHandler5}>
            -5
          </button>
          <button className="btn btn-success" onClick={this.incHandler5}>
            +5
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary mt-1"
            type="reset"
            onClick={this.resetButton}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
