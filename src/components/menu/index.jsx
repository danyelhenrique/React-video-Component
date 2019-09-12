import React from "react";

import "./index.css";

import SIDEBARITEMS from "./sidebarItems";
import PLAYLISTUSER from "./playlistUser";
import USERSUBSCRIPTION from "./UserSubscription";
import HEADERPLAYLIST from "./header";

export default function INDEX({ showMenu, setShowMenu }) {
  const MenuActive = !!showMenu.isShow ? "hidden-sidebar" : "";
  return (
    <sidebar className="main-sidebar" id={MenuActive}>
      <div className="main-sidebar-active-menu"></div>
      <HEADERPLAYLIST showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="main-sidebar-content">
        <SIDEBARITEMS />
        <PLAYLISTUSER />
        <USERSUBSCRIPTION />
      </div>
    </sidebar>
  );
}
