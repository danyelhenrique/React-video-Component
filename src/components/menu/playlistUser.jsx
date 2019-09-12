import React from "react";

import "./playlistUser.css";

import { FaFolder } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

export default function PlaylistUser() {
  return (
    <div className="playlist-user-sidebar">
      {/* <div className="sidebar-items-content"> */}
      <div className="playlist-user-sidebar-items" id="sidebar-items-content">
        <a href="#/">
          <FaFolder id="sidebar-item-icon" />
          <span> Library</span>
        </a>

        <a href="#/">
          <FaHistory id="sidebar-item-icon" />
          <span>History</span>
        </a>

        <a href="#/">
          <FaClock id="sidebar-item-icon" />
          <span>Watch later</span>
        </a>
        <a href="#/">
          <MdPlaylistPlay id="sidebar-item-icon" />
          <span>Name of Playlist</span>
        </a>
        <a href="#/">
          <MdExpandMore id="sidebar-item-icon" />
          <span>Show More</span>
        </a>
      </div>
    </div>
  );
}
