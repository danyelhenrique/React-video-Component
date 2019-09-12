import React, { useState, useEffect } from "react";
import "./index.css";

import VIDEOCOMMENTS from "../videocomments";

//FAKE DATE TYPES FOR TESTE
const AVATAR = "https://i.pravatar.cc/300";
const URL = "http://localhost:3001/allComments";
const date = new Date();
const day = date.getDate();

export default function INDEX() {
  const [addClassInput, setAddClassInput] = useState({ isCommenting: false });
  const [userComment, setuserComment] = useState({ comment: null });
  const [onlocal, setOnlocal] = useState({ isOn: false });

  function addClassInputOnlcik() {
    setAddClassInput({ isCommenting: true });
  }

  function cancelComment() {
    setuserComment({ comment: "" });
    setAddClassInput({ isCommenting: false });
  }
  function handleComment(e) {
    const comment = e.target.value;
    setuserComment({ comment });
  }
  async function sendUserComment(e) {
    const comment = userComment.comment;
    const items = JSON.stringify({
      name: "USERTESTE",
      comment: comment,
      date: day
    });
    localStorage.setItem("@user-commet-temp", items);
    setOnlocal({ isOn: true });
    const SendData = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "USERTESTE",
        comment: comment,
        date: day
      })
    };

    await fetch(URL, SendData);

    setuserComment({ comment: "" });
    setAddClassInput({ isCommenting: false });
  }

  function renderVideoComments() {
    return <VIDEOCOMMENTS setOnlocal={setOnlocal} onlocal={onlocal} />;
  }

  const setClassInput = (!!addClassInput.isCommenting && "commenting") || "";

  return (
    <div className="video-body-comments" id={setClassInput}>
      <h5>4.178 comments</h5>
      <div className="video-body-comment-user-area">
        <div className="comments-user-area-avatar">
          <img src={AVATAR} alt="avatar" />
        </div>
        <div
          className="video-body-input-user-area"
          onClick={() => addClassInputOnlcik()}
        >
          <input
            type="text"
            name="comment"
            value={userComment.comment}
            placeholder="Add a public commet.."
            onChange={e => handleComment(e)}
            autocomplete="off"
          />
        </div>
      </div>
      <div className="send-cancel-comment">
        <button id="cancel-comment" onClick={() => cancelComment()}>
          CANCEL
        </button>
        <button id="send-comment" onClick={e => sendUserComment(e)}>
          COMMENT
        </button>
      </div>
      {renderVideoComments()}
    </div>
  );
}
