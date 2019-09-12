import React from "react";

import { MdHome } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./sidebarItems.css";
export default function SidebarItems() {
  return (
    <div className="sidebar-items">
      <div className="sidebar-items-content-yt" id="sidebar-items-content">
        <a href="#/">
          <MdHome id="sidebar-item-icon" />
          <span>Home</span>
        </a>

        <a href="#/">
          <FaFire id="sidebar-item-icon" />
          <span>Trending</span>
        </a>
        <a href="#/">
          <FaYoutube id="sidebar-item-icon" />
          <span>Subscriptions</span>
        </a>
      </div>
    </div>
  );
}
