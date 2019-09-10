import React, { useState, useEffect } from "react";
import "./index.css";

import VIDEOCOMMENTS from "../videocomments";
import { async } from "q";

//FAKE DATE TYPES FOR TESTE
const URL = "https://i.pravatar.cc/300";
const USER = "example-user";
// const DATE = new Date();

//END
//
export default function INDEX() {
  useEffect(() => {
    async function LOGUSER() {
      const GetData = await fetch("https://reqres.in/api/users?page=2");
      const Json = await GetData.json();
      const Resp = await Json;

      const Set = await setAllComeents(Resp);
      setAllDataCommentary({ check: true });
    }
    LOGUSER();
  }, []);
  const [addClassInput, setAddClassInput] = useState({ isCommenting: false });
  const [userComment, setuserComment] = useState({ comment: null });
  //
  const [AllDataCommentary, setAllDataCommentary] = useState({ check: false });
  const [AllComeents, setAllComeents] = useState();

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
    const comment = await userComment.comment;

    setuserComment({ comment: "" });
    setAddClassInput({ isCommenting: false });
  }

  function renderVideoComments() {
    const check = AllDataCommentary.check;
    if (check) {
      return <VIDEOCOMMENTS avatar={URL} AllComeents={AllComeents} />;
    }
  }

  const setClassInput = (!!addClassInput.isCommenting && "commenting") || "";

  return (
    <div className="video-body-comments" id={setClassInput}>
      <h5>4.178 comments</h5>
      <div className="video-body-comment-user-area">
        <div className="comments-user-area-avatar">
          <img src={URL} alt="avatar" />
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
