import React from "react";
import { connect } from "react-redux";
import "./hero.css";

function Hero({ overflow: { MenuIsOpen }, children }) {
  const MenuActive = !MenuIsOpen && "hidden-on-show-menu";
  return (
    <div className="hero" id={MenuActive}>
      {children}
    </div>
  );
}

const mapStateToProps = state => ({
  overflow: state.sidebar
});
export default connect(
  mapStateToProps,
  null
)(Hero);
