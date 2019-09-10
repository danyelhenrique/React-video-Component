import React from "react";
import "./header.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import { MdShuffle } from "react-icons/md";

export default function header({hiddenPlaylist}) {
 
  return (
    <div className="header-playlist">
      <a href="#/">name playlist</a>
      <div className="top-header-playlist">
        <span className="name-creator-playlst">
          por
          <a href="#/"> Name creator </a>- 2 / 159
        </span>
        <MdKeyboardArrowUp id="icon-header-playlist" onClick={()=> hiddenPlaylist()} />
      </div>
      <div className="settings-playlist">
        <div className="settings-playlsit-repeat-random">
          <MdRepeat id="icon-header-playlist" />
          <MdShuffle id="icon-header-playlist" />
        </div>
        <MdPlaylistAddCheck id="icon-header-playlist" />
      </div>
    </div>
  );
}
