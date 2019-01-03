import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 5 },
      { id: 6, value: 6 },
      { id: 7, value: 7 }
    ]
  };

  constructor() {
    super();
    console.log("Constructed");
  }

  componentDidMount() {
    //Ajax Call
    console.log("Mounted");
  }

  handleIncrement = counter => {
    //create another counters list
    const counters = [...this.state.counters];
    console.log(counters.indexOf(counter));

    //store the index of the specific counter by finding its index in the list
    const index = counters.indexOf(counter);
    //route 1, change and save the changed counter
    // counter.value++;
    // counters[index] = { ...counter };

    //route 2, save and change
    counters[index].value++;

    this.setState({ counters });
  };

  handleDelete = counterId => {
    const newList = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newList });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
