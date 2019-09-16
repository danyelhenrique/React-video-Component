import React from "react";
import { toggleMenu } from "../../store/actions/sidebar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//
import LighLogo from "../../assets/logo-light.png";
import DarkLogo from "../../assets/logo-dark.png";

import "./index.css";
import { TiThSmall } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";

import { MdNotificationsNone } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const Header = props => {
  const URL = "https://i.pravatar.cc/300";
  // const isVideoLarge = addClassVideo.isAdd ? "header-black" : "";
  // const changeLogo = !addClassVideo.isAdd ? LighLogo : DarkLogo;
  const isVideoLarge = "";
  const changeLogo = LighLogo;

  function ShowMenu() {
    props.toggleMenu();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMenu }, dispatch);

const mapStateToProps = state => ({
  MenuState: state.sidebar
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
