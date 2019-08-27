import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import video from "../../videos/video.mp4";

import { FiVolume1 } from "react-icons/fi"; // volume 1
import { FiSkipForward } from "react-icons/fi"; //next
import { FiSkipBack } from "react-icons/fi"; // prev
import { FiSettings } from "react-icons/fi"; // settings
import { FiPlay } from "react-icons/fi"; // play
import { FiPause } from "react-icons/fi"; // pause
import { FiMaximize } from "react-icons/fi"; // full screen
import { FiMinimize } from "react-icons/fi"; // minimazi screen

import { FaRegClosedCaptioning } from "react-icons/fa"; // captions

export default function INDEX() {
  const ref = useRef();
  const [duration, setDuration] = useState({ value: 0 });
  useEffect(() => {
    setInterval(() => {
      setDuration({ value: ref.current.currentTime });
    }, 1000);
  }, []);

  function play() {
    return () => ref.current.play();
  }

  function pause() {
    return () => ref.current.pause();
  }

  function fullScreen() {
    return () =>
      ref.current.requestFullscreen()
        ? ref.current.fullscreenElement
        : ref.current.exitFullscreen();
  }

  return (
    <div className="video-component">
      <video controls className="video-item" ref={ref}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="controls">
        <button onClick={play()}>
          <FiPlay></FiPlay>
        </button>
        <button onClick={pause()}>
          <FiPause></FiPause>
        </button>
        <button onClick={fullScreen()}>
          <FiMaximize></FiMaximize>
        </button>
        <div
          className="current"
          //   style={{ width: `${ref.current.currentTime}px` }}
        >
          {duration.value}
        </div>
      </div>
    </div>
  );
}
