import React, { useState } from "react";
import "./App.css";

import HEADER from "./components/header";
import MAIN from "./components/main";
import PLAYLIST from "./components/playlist";
import BODY from "./components/body";
import VIDEO from "./components/teste";
import MENUSIDEBAR from "./components/menu";

function App(props) {
  const [addClassVideo, setClassVideo] = useState({ isAdd: false });
  const [showMenu, setShowMenu] = useState({ isShow: false });
  const MenuActive = !showMenu.isShow ? "hidden-on-show-menu" : "";

  return (
    <div className="App" id={MenuActive}>
      <HEADER
        addClassVideo={addClassVideo}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <MENUSIDEBAR showMenu={showMenu} setShowMenu={setShowMenu} />
      <MAIN addClassVideo={addClassVideo}>
        <VIDEO setClassVideo={setClassVideo} addClassVideo={addClassVideo} />
        <PLAYLIST />
        <BODY />
      </MAIN>
    </div>
  );
}
export default App;
