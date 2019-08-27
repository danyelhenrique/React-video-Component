import React from "react";

import "./App.css";

import HEADER from "./components/header";
import VIDEOCOMPONENT from "./components/videoComponent";

function App() {
  return (
    <div className="App">
      <HEADER></HEADER>
      <VIDEOCOMPONENT></VIDEOCOMPONENT>
      {/* <h1>ola</h1> */}
    </div>
  );
}

export default App;
