import React from "react";
import LighLogo from "../../assets/logo-light.png";
import DarkLogo from "../../assets/logo-dark.png";

import "./index.css";
import { TiThSmall } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";

import { MdNotificationsNone } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const index = ({ addClassVideo, showMenu, setShowMenu }) => {
  const URL = "https://i.pravatar.cc/300";
  const isVideoLarge = addClassVideo.isAdd ? "header-black" : "";
  const changeLogo = !addClassVideo.isAdd ? LighLogo : DarkLogo;

  function ShowMenu() {
    setShowMenu({ isShow: !showMenu.isShow });
  }

  return (
    <header className="header" id={isVideoLarge}>
      <div className="header-content">
        <div className="header-menu-logo">
          <a href="#/" id="header-link-item" onClick={() => ShowMenu()}>
            <MdMenu id="header-icon" />
          </a>
          <a href="#/" id="header-link-item">
            <img src={changeLogo} alt="logo" />
          </a>
        </div>
        <div className="header-search">
          <input
            type="text"
            name=""
            id="header-search"
            placeholder="Pesquisar"
          />
          <button type="submit">
            <MdSearch id="header-icon" />
          </button>
        </div>
        <div className="header-user-area">
          <a href="#/" id="header-link-item">
            <TiThSmall id="header-icon" />
          </a>
          <a href="#/" id="header-link-item">
            <TiArrowForwardOutline id="header-icon" />
          </a>
          <a href="#/" id="header-link-item">
            <MdNotificationsNone id="header-icon" />
          </a>
          <a href="#/" id="header-link-item" className="user">
            <img src={URL} alt="avatar" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default index;
