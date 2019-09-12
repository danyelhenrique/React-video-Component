import React from "react";

import LOGO from "../../assets/logoChannel.jpg";
import "./UserSubscription.css";

export default function UserSubscription() {
  //   const fakeData = new Array(15);
  const fakeData = ["1", "1", "1", "1", "1", "1", "1"];
  console.log(fakeData);
  function renderInscriptions() {
    fakeData.map(ele => (
      <div className="sidebar-subscription-content">
        <a className="sidebar-subscription-inscriptions">
          <img src={LOGO} alt="logo-channel" />
          <span>afterhours</span>
        </a>
      </div>
    ));
  }

  return (
    <div className="sidebar-subscription-items">
      <h3>SUBSCRIPTIONS</h3>
      {fakeData.map(ele => (
        <div className="sidebar-subscription-content">
          <a className="sidebar-subscription-inscriptions">
            <img src={LOGO} alt="logo-channel" />
            <span>afterhours</span>
          </a>
        </div>
      ))}
      {/* {renderInscriptions()} */}
    </div>
  );
}
