import { combineReducers } from "redux";

import { ToggleMenu } from "./reduces/sidebar";
import { ToggleVideoWidth } from "./reduces/largeVideo";
import { HiddenPlaylist } from "./reduces/hiddenPlaylist";

const root = combineReducers({
  sidebar: ToggleMenu,
  WidthVideo: ToggleVideoWidth,
  playlistIsHidden: HiddenPlaylist
});

export default root;
