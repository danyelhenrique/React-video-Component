const INITITAL_STATE = {
  menuIsHidden: false
};

export const HiddenPlaylist = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case "HIDDEN_PLAYLIST":
      return { ...state, menuIsHidden: !state.menuIsHidden };
    default:
      return state;
  }
};
