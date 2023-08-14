import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpg";

// React Element

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

// Component Compositions
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading"> Namaste React Functional Component </h1>
  </div>
);

/*
    1. Add a logo on the left side
    2. Add a search bar in middle
    3. Add User icon on right
    4. Add CSS to look it nice
*/

const TopBar = () => (
  <>
    <header className="header">
      <div className="left">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="center">
        <input
          type="text"
          className="input"
          placeholder="Enter the search value"
        ></input>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="right">
        <i class="fa fa-user"></i>
      </div>
    </header>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TopBar />);
