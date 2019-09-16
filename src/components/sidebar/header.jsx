import React from "react";
import { bindActionCreators } from "redux";
import { toggleMenu } from "../../store/actions/sidebar";
import { connect } from "react-redux";
import "./header.css";
import LOGO from "../../assets/logo-light.png";
import { MdMenu } from "react-icons/md";

function headerSidebar(props) {
  function ShowMenu() {
    props.toggleMenu();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMenu }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(headerSidebar);
