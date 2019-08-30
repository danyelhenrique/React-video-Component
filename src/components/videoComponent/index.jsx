import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import video from "../../videos/video.mp4";

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

// MdCropLandscape

import { FaRegClosedCaptioning } from "react-icons/fa"; // captions

function RENDERVIDEO() {
  useEffect(() => {
    setInterval(() => {
      progressBarvideo();
      monitoryScreen();
    }, 1000);
  }, []);

  const [progressBar, SetprogressBar] = useState({ progress: 0 });
  const [playOrPause, SetplayOrPauseItems] = useState({ playing: false });
  const [sizeVideo, SetsizeVideo] = useState({ fullScreen: false });
  const [lgScreen, SetLgScreen] = useState({ largeScreen: false });
  const rf = useRef();

  function progressBarvideo() {
    const video = rf.current;
    video.controls = false;
    const totalProgress = parseInt((video.currentTime / video.duration) * 100);
    SetprogressBar({ progress: totalProgress });
  }

  function setTime(e) {
    const video = rf.current;
    const {
      current: { duration, clientWidth }
    } = rf;
    const timeUpdate = duration * (e.nativeEvent.offsetX / clientWidth);
    video.currentTime = timeUpdate;
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
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function setFullScreen() {
    SetsizeVideo({
      fullScreen: true,
      largeScreen: false
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
        fullScreen: false,
        largeScreen: false
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
      video.play();
      SetplayOrPauseItems(() => ({ playing: true }));
    } else {
      video.pause();
      SetplayOrPauseItems(() => ({ playing: false }));
    }
  }
  const divSt = {
    width: "100%"
  };
  const divStitem = {
    width: `${progressBar.progress}%`
  };

  const setIcons = {
    renderPlayOrPause() {
      if (!playOrPause.playing) {
        return <FiPlay id="video-icon"></FiPlay>;
      } else {
        return <FiPause id="video-icon"></FiPause>;
      }
    }
  };

  function fka() {
    const normalOrFullScreen =
      !!sizeVideo.fullScreen && !lgScreen.largeScreen
        ? "main-video-full-screen"
        : "main-video-normal";
    const largeOrFullScreen = !!lgScreen.largeScreen ? "md" : "";
    return (
      <div className={`${normalOrFullScreen} ${largeOrFullScreen} `}>
        {/* <div className={`${nromalOrFullScreen} ${verifiLargeScreen}` }> */}
        <div className={`main-video-component`}>
          <div className="video-content">
            <video controls className="video-item" ref={rf} controls={false}>
              <source src={video} type="video/mp4" />
            </video>

            <div className="video-configurations">
              <div class="progress" style={divSt} onClick={e => setTime(e)}>
                <div class="progress-item" style={divStitem}></div>
              </div>
              <div className="video-confurations-items">
                <div className="video-play" onClick={e => setPlayOrPause(e)}>
                  {setIcons.renderPlayOrPause()}
                </div>
                <div className="config">
                  <div className="vol-configuration">
                    <FiVolume1 id="video-icon" className="ok"></FiVolume1>
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

                  <div className="maxi-min" onClick={() => setFullScreen()}>
                    <FiMaximize id="video-icon"></FiMaximize>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{fka()}</>;
}

export default RENDERVIDEO;
