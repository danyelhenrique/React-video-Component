import React from "react";
import { connect } from "react-redux";
import "./index.css";

function MAIN(props) {
  const {
    playlistHidden: { menuIsHidden },
    width: { isLarge },
    children
  } = props;

  const wrapPlaylist = !!isLarge ? "wrap-playlist" : "";
  const menuHidden = !!menuIsHidden ? "menu-hidden-top" : "";

  return (
    //
    <main className={`main ${wrapPlaylist} ${menuHidden}`}>{children}</main>
  );
}

const mapStateToProps = state => ({
  width: state.WidthVideo,
  playlistHidden: state.playlistIsHidden
});

export default connect(
  mapStateToProps,
  null
)(MAIN);
