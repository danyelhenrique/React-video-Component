import React from "react";
import "./App.css";

import HEADER from "./components/header";
import MAIN from "./components/main";
import RENDERVIDEO from "./components/videoComponent";
import PLAYLIST from "./components/playlist";
import BODY from "./components/body";
import VIDEO from "./components/teste";

function App() {
  return (
    <div className="App">
      <HEADER></HEADER>
      <MAIN>
        {/* <VIDEO></VIDEO> */}
        <RENDERVIDEO />
        {/* <PLAYLIST /> */}
        {/* <BODY /> */}
      </MAIN>
    </div>
  );
}
export default App;
