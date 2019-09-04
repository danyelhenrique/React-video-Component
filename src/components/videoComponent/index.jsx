import React, { useRef, useState, useEffect } from "react";
import PLAYLIST from "../playlist";
import "./index.css";
import video from "../../videos/video.mp4";
import tumb from "../../assets/thumb.png";

import { FiSkipForward } from "react-icons/fi"; //next
import { FiSkipBack } from "react-icons/fi"; // prev
//
//
import { FiVolume1 } from "react-icons/fi"; // volume 1
import { FiSettings } from "react-icons/fi"; // settings
import { FiPlay } from "react-icons/fi"; // play //ok
import { FiPause } from "react-icons/fi"; // pause // ok
import { FiMaximize } from "react-icons/fi"; // full screen //ok
import { FiMinimize } from "react-icons/fi"; // minimazi screen
import { MdCropLandscape } from "react-icons/md";

import { FaRegClosedCaptioning } from "react-icons/fa"; // captions

function RENDERVIDEO() {
  useEffect(() => {
    setInterval(() => {
      progressBarvideo();
      monitoryScreen();
    }, 1000);
  }, []);

  const [progressBar, SetprogressBar] = useState({
    progress: 0,
    current: 0,
    total: 0
  });
  const [playOrPause, SetplayOrPauseItems] = useState({ playing: false });
  const [sizeVideo, SetsizeVideo] = useState({ fullScreen: false });
  const [lgScreen, SetLgScreen] = useState({ largeScreen: false });
  const [prevLgScreen, SetPrevLgScreen] = useState({ largeScreen: false });
  const [videoItemsClass, SetvideoItemsClass] = useState({ added: true });
  const rf = useRef();
  const rfClass = useRef();
  useEffect(() => {
    setInterval(() => {
      setTimeout(ClearControls, 5000);
    }, 8000);
  }, []);

  function progressBarvideo() {
    const video = rf.current;
    video.controls = false;
    const totalProgress = parseInt((video.currentTime / video.duration) * 100);
    SetprogressBar({
      progress: totalProgress,
      current: video.currentTime,
      total: video.duration
    });
  }

  function setTime(e) {
    const video = rf.current;
    const {
      current: { duration, clientWidth }
    } = rf;
    const timeUpdate = duration * (e.nativeEvent.offsetX / clientWidth);
    video.currentTime = timeUpdate;
  }
  function formatTime() {
    let time = progressBar.current;
    let NewTimeTOtalVideo = progressBar.total / 60;
    let timeTOtalVideo = NewTimeTOtalVideo.toFixed(2)
      .toString()
      .replace(".", ":");
    time = Math.round(time);
    let minutes = Math.floor(time / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    time = Math.floor(time % 60);
    time = time >= 10 ? time : "0" + time;
    // return minutes + ":" + time;
    return `${minutes}:${time} / ${timeTOtalVideo}`;
  }

  function monitoryScreen() {
    if (
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      SetsizeVideo({
        fullScreen: false
      });

      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        document.documentElement.requestFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  function setFullScreen(e) {
    SetsizeVideo({
      fullScreen: true
    });
    SetPrevLgScreen({
      largeScreen: lgScreen.largeScreen
    });
    SetLgScreen({
      largeScreen: false
    });
    SetvideoItemsClass({
      added: true
    });

    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      SetsizeVideo({
        fullScreen: false
      });
      SetLgScreen({
        largeScreen: prevLgScreen.largeScreen
      });
      SetPrevLgScreen({
        largeScreen: lgScreen.largeScreen
      });
      SetvideoItemsClass({
        added: false
      });

      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function largeScreen() {
    if (!!sizeVideo.fullScreen) return;
    SetLgScreen({
      largeScreen: !lgScreen.largeScreen
    });
  }

  function setVolume(e) {
    const video = rf.current;
    video.volume = e.target.value / 100;
  }
  function setPlayOrPause(e) {
    let video = rf.current;
    if (video.paused) {
      SetvideoItemsClass({ added: true });
      video.play();
      SetplayOrPauseItems(() => ({ playing: true }));
    } else {
      video.pause();
      SetplayOrPauseItems(() => ({ playing: false }));
    }
  }

  function setMuteVolume() {
    const video = rf.current;
    if (video.volume > 0) video.volume = 0;
    else {
      video.volume = 0.5;
    }
  }
  function mouseOver() {
    SetvideoItemsClass({ added: true });
  }
  function ClearControls() {
    const checkMpoving = document.querySelector(".video-normal");
    let video = rf.current;
    if (video.paused) return;

    const ismove = (checkMpoving.onmousemove = function() {
      if (ismove) {
        return SetvideoItemsClass({ added: true });
      }
    });

    SetvideoItemsClass({ added: false });
  }

  function mouseMove() {
    SetvideoItemsClass({ added: true });
  }
  const divSt = {
    width: "100%"
  };
  const divStitem = {
    width: `${progressBar.progress}%`
  };

  const setIcons = {
    iconId: "video-icon",
    renderPlayOrPause() {
      if (!playOrPause.playing) {
        return <FiPlay id={this.iconId}></FiPlay>;
      } else {
        return <FiPause id={this.iconId}></FiPause>;
      }
    },
    renderFullScreenorNot() {
      if (!sizeVideo.fullScreen) {
        return <FiMaximize id={this.iconId}></FiMaximize>;
      } else {
        return <FiMinimize id={this.iconId}></FiMinimize>;
      }
    }
  };

  const normalOrFullScreen =
    !!sizeVideo.fullScreen && !lgScreen.largeScreen
      ? "video-full-screen"
      : "normal";
  // const normalOrFullScreen =
  //   !!sizeVideo.fullScreen && !lgScreen.largeScreen
  //     ? "main-video-full-screen"
  //     : "main-video-normal";
  const largeOrFullScreen =
    !!lgScreen.largeScreen && !sizeVideo.fullScreen ? "md" : "";

  const hideShowConfig = !!videoItemsClass.added
    ? "show-controls"
    : "hidden-controls";

  return (
    <div
      className={` video-normal ${normalOrFullScreen} ${largeOrFullScreen} `}
      onMouseOver={() => mouseOver()}
      onMouseOut={e => ClearControls(e)}
      onMouseMove={() => mouseMove()}
      ref={rfClass}
    >
      <div className="video-normal normal">
      <div className="movie">
        <video
          preload="auto"
          controls
          className="video-item"
          ref={rf}
          controls={false}
          poster={tumb}
          src={video}
        />
      </div>
      <div className="video-configurations" id={hideShowConfig}>
        <div class="progress" style={divSt} onClick={e => setTime(e)}>
          <div class="progress-item" style={divStitem}></div>
        </div>
        <div className="video-confurations-items">
          <div className="video-play" onClick={e => setPlayOrPause(e)}>
            {setIcons.renderPlayOrPause()}
            <span className="time-video">{formatTime()}</span>
          </div>
          <div className="config">
            <div className="vol-configuration">
              <FiVolume1
                id="video-icon"
                className="volume-icon"
                onClick={() => setMuteVolume()}
              ></FiVolume1>
              <input
                className="volume"
                type="range"
                min="0"
                max="100"
                step="1"
                onChange={e => setVolume(e)}
              ></input>
            </div>
            <div className="video-captions">
              <FaRegClosedCaptioning id="video-icon"></FaRegClosedCaptioning>
            </div>
            <div className="large-screen">
              <MdCropLandscape
                id="video-icon"
                onClick={() => largeScreen()}
              ></MdCropLandscape>
            </div>

            <div className="maxi-min" onClick={e => setFullScreen(e)}>
              {/* <FiMaximize id="video-icon"></FiMaximize> */}
              {setIcons.renderFullScreenorNot()}
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
}

export default RENDERVIDEO;
