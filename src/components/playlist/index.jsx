import React,{useState} from "react";
import "./index.css";
import thumbVideo from "../../assets/image.jpg";
import webp from "../../assets/video.webp";
import HEADERPLAYLIST from "./header";
import BODYPLAYLIST from "./body";

export default function INDEX() {
  const [hidden, setHidden] = useState({isHidden: false})
  const array = [...new Array(20)];
  function fc() {
    console.log("hello");
    // Set sorce on main to video  item on playslit
  }
  function hiddenPlaylist (){
    setHidden({isHidden :!hidden.isHidden})
  }
  const setIdHidden = !!hidden.isHidden && "hidden"
  return (
    <section className="section-playlist" id={setIdHidden}>
      <HEADERPLAYLIST hiddenPlaylist={hiddenPlaylist}/>
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
