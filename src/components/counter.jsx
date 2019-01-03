import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("This changed value");
      //Ajx call get new data from erver
    }
  }

  componentWillUnmount() {
    console.log("Counter-UnMount");
  }

  render() {
    console.log("Counter Rendered");

    const { counter, onDelete, onIncrement } = this.props;

    // console.log(this.props);
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            // onClick={() => this.props.onIncrement(this.props.counter)}
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            // onClick={() => this.props.onDelete(this.props.counter.id)}
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // this is called object destructuring
    // this.state.count is const {count} = this.state; because we picked out count from this.state
    const { value } = this.props.counter;
    //you can return jsx like <h5>Zero</h5> or normal string like "Zero"
    return value === 0 ? "Zero" : value;
  }

  //you can add css like this

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // and add it like style = { this.styles }
  // or style = {{ fontSize:30 }}
}

export default Counter;
