import React, { useState, useRef } from "react";
import "./index.css";
import video from "../../videos/video.mp4";

export default function INDEX({ setClassVideo, addClassVideo }) {
  const [fullSreen, setFullScreen] = useState({ isfull: false });
  const [largeVideo, setlargeVideo] = useState({ islarge: false });
  const [progress, setProgress] = useState({ porcent: 0 });
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

  function handleLargeVideo() {
    setClassVideo({ isAdd: !addClassVideo.isAdd });
    setlargeVideo({ islarge: !largeVideo.islarge });
  }

  function progressBar(e) {
    const porcent = parseInt((e.target.currentTime / e.target.duration) * 100);
    setProgress({ porcent: porcent });
    console.log(e.target.currentTime);
    console.log(e.target.duration);
    console.log(progress.porcent);
  }

  const widt = {
    width: `${progress.porcent}%`
  };

  const full = !!fullSreen.isfull ? "full" : "";
  const classLargeVideo = !!largeVideo.islarge ? "large" : "";
  return (
    <section className={`section-video ${full} ${classLargeVideo}`}>
      <div className={`video-section-item `}>
        <video
          src={video}
          id="video-item"
          controls
          // onLoadStart={e => progressBar(e)}
          onPlaying={e => progressBar(e)}
          onChange={e => progressBar(e)}
        />
      </div>
      {/* <button onClick={() => handlefullScreen()}> teste</button> */}
      {/* <button onClick={() => handleLargeVideo()}> maior</button> */}
      <div className="controls">
        <div className="progress-bar" style={widt}>
          <span className="progress-bar-progress"></span>
        </div>
      </div>
    </section>
  );
}
