import React from "react";
import "./bodyConfig.css";

import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
import { MdShare } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";

export default function bodyVideoConfig() {
  return (
    <div className="body-video-config">
      <div className="body-video-config-title">
        <h1>NX Zero, Chorão - Cedo Ou Tarde - Projeto Paralelo</h1>
      </div>
      <div className="body-video-config-data">
        <span>3.363.323 visualizaçoes</span>
        <div className="body-video-config-items">
          <div className="body-video-config-items-icons">
            <div className="like-dislike">
              <div className="like">
                <MdThumbUp id="body-config-icon" />
                <span>78 Mil</span>
              </div>
              <div className="dislike">
                <MdThumbDown id="body-config-icon" />
                <span>768</span>
              </div>
            </div>
            <div className="share">
              <MdShare id="body-config-icon" />
              <span>Share</span>
            </div>
            <div className="add">
              <MdPlaylistAdd id="body-config-icon" />
              <span>Save</span>
            </div>
            <div className="report">
              <MdMoreHoriz id="body-config-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
