import React from 'react'
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Navbar),
    React.createElement(Home),
    React.createElement(Skills),
    React.createElement(Work),
    React.createElement(Contact)
  );
}

export default App;
