import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Destructuring Arguments, you can skip this.props
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters Rendered");

    return (
      <div>
        <button
          onClick={onReset}
          // onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            // onDelete={this.props.onDelete}
            onIncrement={onIncrement}
            // onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
