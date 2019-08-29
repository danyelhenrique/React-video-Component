import React from "react";
import "./App.css";

import HEADER from "./components/header";
import RENDERVIDEO from "./components/videoComponent";

function App() {
  return (
    <div className="App">
      <HEADER></HEADER>
      <RENDERVIDEO></RENDERVIDEO>
    </div>
  );
}
export default App;
