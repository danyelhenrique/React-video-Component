import React, { useState } from "react";
import "./App.css";

import HEADER from "./components/header";
import MAIN from "./components/main";
import RENDERVIDEO from "./components/videoComponent";
import PLAYLIST from "./components/playlist";
import BODY from "./components/body";
import VIDEO from "./components/teste";

function App(props) {
  const [addClassVideo, setClassVideo] = useState({ isAdd: false });
  console.log(props);
  return (
    <div className="App">
      <HEADER addClassVideo={addClassVideo} />
      <MAIN addClassVideo={addClassVideo}>
        <VIDEO setClassVideo={setClassVideo} addClassVideo={addClassVideo} />
        {/* <RENDERVIDEO
          setClassVideo={setClassVideo}
          addClassVideo={addClassVideo}
        /> */}
        <PLAYLIST />
        <BODY />
      </MAIN>
    </div>
  );
}
export default App;
