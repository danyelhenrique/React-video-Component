import React, { useEffect, useState } from "react";
import "./index.css";
import { async } from "q";

// const URL = "https://i.pravatar.cc/300";

const URL = "http://localhost:3001/allComments";

export default function INDEX({ AllComeents, SendCOmment }) {
  const [comments, setcommets] = useState();
  const [load, setload] = useState({ isLoad: false });

  useEffect(() => {
    async function GetComments() {
      const GetData = await fetch(URL);
      const Json = await GetData.json();
      await setcommets(Json);
      setload({ isLoad: true });
    }
    GetComments();
  }, []);

  useEffect(() => {
    function UpdateComments() {
      setInterval(async () => {
        const GetData = await fetch(URL);
        const Json = await GetData.json();
        await setcommets(Json);
      }, 50000);
    }
    UpdateComments();
  });
  // console.log("comments", comments);
  function handleCommentsArea() {
    if (!!load.isLoad) {
      return comments.map((ele, index) => (
        <div className="list-video-comments">
          <div className="avatar-comment">
            <img src={URL} alt="" />
          </div>
          <div className="list-video-comments-name-user">
            <div className="user-name-date">
              <h6>{ele.name}</h6>
              <p>{ele.date} days</p>
            </div>
            <span>{ele.comment}</span>
          </div>
        </div>
      ));
    } else {
      return <h1>Loading</h1>;
    }
  }

  return <div>{handleCommentsArea()}</div>;
}
