import React from "react";
import { connect } from "react-redux";

import "./index.css";

import SIDEBARITEMS from "./sidebarItems";
import PLAYLISTUSER from "./playlistUser";
import USERSUBSCRIPTION from "./UserSubscription";
import HEADERPLAYLIST from "./header";

function Aside(props) {
  const MenuActive = !!props.MenuState.MenuIsOpen && "hidden-sidebar";
  return (
    <sidebar className="main-sidebar" id={MenuActive}>
      <div className="main-sidebar-active-menu"></div>
      <HEADERPLAYLIST />
      <div className="main-sidebar-content">
        <SIDEBARITEMS />
        <PLAYLISTUSER />
        <USERSUBSCRIPTION />
      </div>
    </sidebar>
  );
}
const mapStateToProps = state => ({
  MenuState: state.sidebar
});

export default connect(mapStateToProps)(Aside);
