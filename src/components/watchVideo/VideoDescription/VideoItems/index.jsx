import React from "react";

import "./index.css";
import { MdNotificationsActive } from "react-icons/md";

const URL = "https://i.pravatar.cc/300";
export default function VideoItems() {
  return (
    <div>
      <div className="video-description">
        <div className="video-description-config-channel">
          <div className="video-description-config-channel-owner-video">
            <div className="thumb-user">
              <div className="thumb-user-img">
                <img src={URL} alt="" />
              </div>
              <div className="thumb-user-config">
                <h5>Hasley</h5>
                <span>2.53M subscribers</span>
              </div>
            </div>
            <div className="notifications-subscription">
              <button type="submit">subscription</button>
              <MdNotificationsActive id="icon-notification-subscriptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
