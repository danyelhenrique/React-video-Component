import React from "react";
import "./index.css";

import BODYCONFIG from "./bodyConfig";
import VIDEOBODYCONFIG from "../videoBody";
import VIDEOBODYCONTENT from "../videoBody/videoBodyContent";
import USERCOMMENTS from "../userComments";

export default function INDEX() {
  return (
    //
    <section className="section-body-video">
      <BODYCONFIG />
      <VIDEOBODYCONFIG />
      <VIDEOBODYCONTENT />
      <USERCOMMENTS />
    </section>
  );
}
