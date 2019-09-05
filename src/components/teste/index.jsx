import React, { useState, useRef } from "react";
import "./index.css";
import video from "../../videos/video.mp4";

import { MdVolumeDown } from "react-icons/md";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { MdPause } from "react-icons/md";
import { MdCrop54 } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
import { MdClosedCaption } from "react-icons/md";

export default function INDEX({ setClassVideo, addClassVideo }) {
  const [largeVideo, setlargeVideo] = useState({ islarge: false });
  const [setIcons, seSetIcons] = useState({
    isPlaying: false,
    onfullScreen: false,
    totalVolume: 0.5
  });
  const [progress, setProgress] = useState({
    porcent: 0,
    duration: 0,
    clientW: 0
  });
  const useRf = useRef();

  function handlefullScreen() {
    // const elem = document.querySelector("#video-item");
    const elem = document.querySelector(".section-video");
    seSetIcons({ ...setIcons, onfullScreen: !setIcons.onfullScreen });

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }

    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }

  function handleLargeVideo() {
    setClassVideo({ isAdd: !addClassVideo.isAdd });
    setlargeVideo({ islarge: !largeVideo.islarge });
  }
  function setPlayOrPause() {
    const video = document.querySelector("#video-item");
    seSetIcons({ ...setIcons, isPlaying: !setIcons.isPlaying });

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function setVolume(e) {
    const video = document.querySelector("#video-item");
    let totalVolume = e.target.value / 100;
    video.volume = totalVolume;
    seSetIcons({ ...setIcons, totalVolume });
  }

  function setMuteVolume() {
    const video = document.querySelector("#video-item");
    if (video.volume > 0) {
      video.volume = 0;
      seSetIcons({ ...setIcons, totalVolume: 0 });
    } else {
      video.volume = 0.5;
      seSetIcons({ ...setIcons, totalVolume: 0.5 });
    }
  }

  function progressBar(e) {
    const porcent = parseInt((e.target.currentTime / e.target.duration) * 100);
    setProgress({
      porcent: porcent,
      duration: e.target.duration,
      clientW: e.target.clientWidth
    });
  }

  function changeCurrentTime(e) {
    const videoItem = document.querySelector("#video-item");
    let duration = progress.duration;
    const timeUpdate = duration * (e.nativeEvent.offsetX / progress.clientW);
    const newProgress = parseInt((timeUpdate / duration) * 100);
    if (isNaN(newProgress)) {
      let duration = videoItem.duration;
      const timeUpdate =
        duration * (e.nativeEvent.offsetX / videoItem.clientWidth);
      const newProgress = parseInt((timeUpdate / duration) * 100);
      videoItem.currentTime = timeUpdate;
      setProgress({
        ...progress,
        porcent: newProgress
      });
    } else {
      videoItem.currentTime = timeUpdate;
      setProgress({
        ...progress,
        porcent: newProgress
      });
    }
  }

  const widt = {
    width: `${progress.porcent}%`
  };

  const renderIcons = {
    IconId: "controls-video-icon",
    renderPlayOrPause() {
      return !setIcons.isPlaying ? (
        <MdPlayArrow id={this.IconId} />
      ) : (
        <MdPause id={this.IconId} />
      );
    },
    renderFullScreen() {
      return !setIcons.onfullScreen ? (
        <MdFullscreen id={this.IconId} />
      ) : (
        <MdFullscreenExit id={this.IconId} />
      );
    },
    renderLargeVideo() {
      return !setIcons.onfullScreen ? <MdCrop54 id={this.IconId} /> : "";
    },
    renderVolume() {
      if (setIcons.totalVolume <= 0) {
        return <MdVolumeOff id={this.IconId} onClick={() => setMuteVolume()} />;
      } else if (setIcons.totalVolume >= 1.0) {
        return <MdVolumeUp id={this.IconId} onClick={() => setMuteVolume()} />;
      } else {
        return (
          <MdVolumeDown id={this.IconId} onClick={() => setMuteVolume()} />
        );
      }
    }
  };

  const classLargeVideo = !!largeVideo.islarge ? "large" : "";
  return (
    <section className={`section-video  ${classLargeVideo}`}>
      <div className="video-section-item ">
        <video src={video} id="video-item" onTimeUpdate={e => progressBar(e)} />
      </div>
      <div className="controls">
        <div className="progress-bar" onClick={e => changeCurrentTime(e)}>
          <div className="progress-bar-progress" style={widt}></div>
        </div>
        <div className="controls-config">
          <div className="controls-config-initial">
            <a href="#/" onClick={() => setPlayOrPause()}>
              {renderIcons.renderPlayOrPause()}
            </a>
            <div>
              {renderIcons.renderVolume()}
              <input
                className="volume"
                type="range"
                min="0"
                max="100"
                step="1"
                onChange={e => setVolume(e)}
              ></input>
            </div>
          </div>
          {/*  */}
          <div className="controls-config-end">
            <a href="#/">
              <MdClosedCaption id="controls-video-icon" />
            </a>
            <a href="#/" onClick={() => handleLargeVideo()}>
              {renderIcons.renderLargeVideo()}
            </a>
            <a href="#/" onClick={() => handlefullScreen()}>
              {renderIcons.renderFullScreen()}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
