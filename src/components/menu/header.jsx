import React from "react";
import "./header.css";
import LOGO from "../../assets/logo-light.png";
import { MdMenu } from "react-icons/md";

export default function header({ showMenu, setShowMenu }) {
  function ShowMenu() {
    setShowMenu({ isShow: !showMenu.isShow });
  }
  return (
    <div className="sidebar-header">
      <a
        href="#/"
        className="sidebar-header-burguer"
        onClick={() => ShowMenu()}
      >
        <MdMenu id="sidebar-icon" />
      </a>
      <a href="#/" className="sidebar-header-logo">
        <img src={LOGO} alt="logo" />
      </a>
    </div>
  );
}
