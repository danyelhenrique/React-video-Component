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

import { FaRegClosedCaptioning } from "react-icons/fa"; // captions

function RENDERVIDEO() {
  useEffect(() => {
    setInterval(() => {
      progressBarvideo();
    }, 1000);
  }, []);

  const [progressBar, SetprogressBar] = useState({ progress: 0 });
  const rf = useRef();

  function progressBarvideo() {
    const video = rf.current;
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

  function setVolume(e) {
    const video = rf.current;
    video.volume = e.target.value / 100;
  }

  const divSt = {
    backgroundColor: "#00B1E1",
    width: "100%",
    height: "100px"
  };
  const divStitem = {
    backgroundColor: "#27ae60",
    width: `${progressBar.progress}%`,
    height: "100px"
  };
  return (
    <div className="algo">
      <video controls className="video-item" ref={rf}>
        <source src={video} type="video/mp4" />
      </video>
      <div class="progress" style={divSt} onClick={e => setTime(e)}></div>
      <div class="progress-item" style={divStitem}>
        {`${progressBar.progress}%`}
      </div>
      <input
        className="volume"
        type="range"
        min="0"
        max="100"
        // value={rf.current.volume}
        step="1"
        onChange={e => setVolume(e)}
      />
    </div>
  );
}

export default RENDERVIDEO;
