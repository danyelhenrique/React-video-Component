import React, { useEffect, useState } from "react";
import "./index.css";

const URL = "http://localhost:3001/allComments";
const AVATAR = "https://i.pravatar.cc/300";

export default function INDEX({ onlocal, setOnlocal }) {
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
  //
  useEffect(() => {
    // CHECK NEW COMMENTS ON DATABASE AFTER 1.5 MINUTES
    // AND REMOVE TEMPORARY COMMENT USER FROM LOCALSTORAGE
    // function UpdateComments() {
    //   setInterval(async () => {
    //     const GetData = await fetch(URL);
    //     const Json = await GetData.json();
    //     setcommets(Json);
    //     if (localStorage.hasOwnProperty("@user-commet-temp")) {
    //       localStorage.removeItem("@user-commet-temp");
    //     }
    //   }, 900000000);
    // }
    // UpdateComments();
  });

  const getItemLocalStorage = localStorage.getItem("@user-commet-temp");
  const StorageUser = JSON.parse(getItemLocalStorage);

  // function handleCommetUserLocalHistorage() {
  //   if (!!onlocal.isOn) {
  //     return (
  //       <div className="list-video-comments">
  //         <div className="avatar-comment">
  //           <img src={AVATAR} alt="avatar" />
  //         </div>
  //         <div className="list-video-comments-name-user">
  //           <div className="user-name-date">
  //             <h6>{StorageUser.name}</h6>
  //             <p>{StorageUser.date} days</p>
  //           </div>
  //           <span>{StorageUser.comment}</span>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  function handleCommentsArea() {
    if (!!load.isLoad) {
      return comments.map((ele, index) => (
        <div className="list-video-comments">
          <div className="avatar-comment">
            <img src={AVATAR} alt="avatar" />
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
      return <div></div>;
    }
  }

  return (
    <div>
      {/* {handleCommetUserLocalHistorage()} */}
      {handleCommentsArea()}
    </div>
  );
}
