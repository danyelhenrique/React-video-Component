import React from "react";
import { connect } from "react-redux";
import webp from "../../assets/video.webp";

import "./index.css";
function Playlist(props) {
  const isLarge = !!props.videoLarge.isLarge ? "large-video" : "";
  const menuHidden = !!props.playlistHidden.menuIsHidden
    ? "modify-menu-to-top"
    : "";
  const array = [...new Array(20)];
  return (
    <div className={`sidebar-video-playlist ${menuHidden}`} id={isLarge}>
      {array.map((_, index) => (
        <a href="#/" className="sidebar-playlist-items" key={index}>
          <div className="sidebar-playlist-image">
            <img src={webp} alt="" />
          </div>
          <div className="sidebar-items-description">
            <h4>React Component Patterns by Michael Chan</h4>
            <span>Name channel</span>
            <p>49K views</p>
          </div>
        </a>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  videoLarge: state.WidthVideo,
  playlistHidden: state.playlistIsHidden
});

export default connect(
  mapStateToProps,
  null
)(Playlist);
