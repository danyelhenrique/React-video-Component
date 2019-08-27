import React from "react";
import logo from "../../assets/logo.png";
import burguer from "../../assets/burguerMenu.svg";
import notifications from "../../assets/notifications.svg";
import view from "../../assets/view.svg";
import people from "../../assets/people.svg";

import "./index.css";

const index = ({ menu, header }) => {
  function check() {
    if (!!menu.homePage) {
      header({ homePage: true, smallMenu: !menu.smallMenu, display: true });
    }
    if (!menu.homePage) {
      header({ homePage: false, smallMenu: false, display: !menu.display });
    }
  }

  return (
    <header className="header-content">
      <div className="menu">
        <div className="burguer-logo">
          <div className="menu-burguer">
            <a href="#/" className="burguer" onClick={() => check()}>
              <img src={burguer} alt="burguer" />
            </a>
          </div>

          <div className="logo">
            <a href="#/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="header-item-search">
          <form action="#/" method="get">
            <input
              className="header-input"
              type="text"
              placeholder="Pequisar"
            />
            <div className="header-input-button">
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
        <div className="header-user-items">
          <a href="#/">
            <img src={view} alt="" />
          </a>
          <a href="#/" className="notifications">
            <img src={notifications} alt="" />
          </a>
          <div className="header-user-menu-dropdown">
            <img src={people} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
