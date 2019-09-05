import React from "react";
import "./index.css";
import thumbVideo from "../../assets/image.jpg";
import webp from "../../assets/video.webp";
import HEADERPLAYLIST from "./header";
import BODYPLAYLIST from "./body";

export default function INDEX() {
  const array = [...new Array(20)];
  function fc() {
    console.log("oi");
  }
  return (
    <section className="section-playlist">
      <HEADERPLAYLIST />
      <div className="playlist-items">
        {array.map((elem, index) => (
          <>
            <BODYPLAYLIST image={webp} count={index} fc={fc} />
          </>
        ))}
      </div>
    </section>
  );
}
