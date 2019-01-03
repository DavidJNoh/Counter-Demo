import React, { Component } from "react";

//Stateless Functional Component
// sfc
//you need to pass in props or destructure it like this
//can not use lifecycle hooks

const NavBar = ({ totalCounters }) => {
  console.log("NavBar Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar, counters with value greater than 0
        <span className="ml-2 badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
