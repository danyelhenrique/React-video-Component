import React from "react";

import "./body.css";

export default function body({ image, count, fc }) {
  return (
    <>
      <a href="#/" className="playlist-content" onClick={() => fc()}>
        <span className="count-playlist">{count}</span>
        <div className="playlist-thumb">
          <img src={image} alt="thumb" />
        </div>
        <div className="description-content-playlist">
          <div className="title-description">
            <span> NX ZERO, Chrão -Cedo Ou Tarde - Projeto Paralelo</span>
          </div>
          <div className="name-channel-description">
            <span className="name-channel">name channel</span>
          </div>
        </div>
      </a>
    </>
  );
}
