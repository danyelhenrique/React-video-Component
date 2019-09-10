import React from "react";
import "./index.css";

//FAKE DATE TYPES FOR TESTE
const date = new Date();
const day = date.getDate();
//EDN
//
export default function index({ AllComeents }) {
  console.log(AllComeents, "Debug");

  function handleCommentsArea() {
    return AllComeents.data.map((elem, index) => (
      <div className="list-video-comments">
        <div className="avatar-comment">
          <img src={elem.avatar} alt="" />
        </div>
        <div className="list-video-comments-name-user">
          <div className="user-name-date">
            <h6>{elem.first_name}</h6>
            <p>{day} dias</p>
          </div>
          {/* <span>{comment[index]}</span> */}
        </div>
      </div>
    ));
  }

  return <div>{handleCommentsArea()}</div>;
}
