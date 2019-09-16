import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { HiddenPlaylist } from "../../../store/actions/hiddenPlaylist";

//
import "./index.css";
import webp from "../../../assets/video.webp";
import HeaaderPlaylist from "./header";
import BodyPlaylist from "./body";

function PlaylistUser({ HiddenPlaylist, playlistIsHidden: { menuIsHidden } }) {
  const array = [...new Array(20)];

  function changeHeightMenu() {
    HiddenPlaylist();
  }

  const setIdHidden = !!menuIsHidden && "hidden";

  return (
    <section className="section-playlist" id={setIdHidden}>
      <div className="section-playlist-content">
        <HeaaderPlaylist changeHeightMenu={changeHeightMenu} />
        {!menuIsHidden && (
          <div className="playlist-items">
            {array.map((_, index) => (
              <>
                <BodyPlaylist image={webp} count={index} key={index} />
              </>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ HiddenPlaylist }, dispatch);

const mapStateToProps = state => ({
  playlistIsHidden: state.playlistIsHidden
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistUser);
