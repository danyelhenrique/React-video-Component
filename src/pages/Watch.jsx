import React from "react";

import "./Watch.css";
import VideoComponent from "../components/watchVideo/videoComponent";
import PlaylistUser from "../components/watchVideo/PlaylistUser";
import VideoDescription from "../components/watchVideo/VideoDescription";
import Comments from "../components/watchVideo/Comments";
import Playlist from "../components/playlist";
import VideoDescriptionContent from "../components/watchVideo/VideoDescription/VideoDescriptionContent";

export default function Video() {
  return (
    <>
      <VideoComponent />
      <PlaylistUser />
      <VideoDescription />
      <Playlist />
      <VideoDescriptionContent />
      <Comments />
    </>
  );
}
