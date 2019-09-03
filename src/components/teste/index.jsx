import React, { useState, useRef } from "react";
import "./index.css";
import video from "../../videos/video.mp4";

export default function INDEX() {
  const [fullSreen, setFullScreen] = useState({ isfull: false });
  const useRf = useRef();

  function handlefullScreen() {
    if (!document.exitFullscreen) {
      document.exitFullscreen =
        document.mozExitFullscreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen;
      //   setFullScreen({ isfull: false });
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen({ isfull: false });
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen({ isfull: true });
    }
  }

  const full = !!fullSreen.isfull ? "full" : "";
  return (
    // <section className="section-video">
    <section className={`section-video ${full}`}>
      <div className={`video-section-item `}>
        <video src={video} id="video-item" controls />
      </div>

      <button onClick={() => handlefullScreen()}> teste</button>
    </section>
  );
}
