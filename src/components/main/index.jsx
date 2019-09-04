import React from "react";
import "./index.css";

export default function INDEX({ children, addClassVideo }) {
  const isLargeVideo = !!addClassVideo.isAdd ? "two" : "";
  return (
    //

    <main className={`main ${isLargeVideo}`}>{children}</main>
  );
}
