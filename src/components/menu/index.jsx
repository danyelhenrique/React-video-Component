import React from "react";

import "./index.css";
import LOGO from "../../assets/logo-light.png";

import SIDEBARITEMS from "./sidebarItems";
import PLAYLISTUSER from "./playlistUser";
import USERSUBSCRIPTION from "./UserSubscription";

import { MdMenu } from "react-icons/md";

export default function INDEX() {
  return (
    <sidebar className="main-sidebar">
      <div className="active"></div>
      <div className="main-sidebar-content">
        <div className="sidebar-header">
          <a href="#/" className="sidebar-header-burguer">
            <MdMenu id="sidebar-icon" />
          </a>
          <a href="#/" className="sidebar-header-logo">
            <img src={LOGO} alt="logo" />
          </a>
        </div>
        <SIDEBARITEMS />
        <PLAYLISTUSER />
        <USERSUBSCRIPTION />
      </div>
    </sidebar>
  );
}
