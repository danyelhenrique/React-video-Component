const INITIAL_STATE = {
  isLarge: false
};

export const ToggleVideoWidth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VIDEO_FULL_WIDTH":
      return { ...state, isLarge: !state.isLarge };
    default:
      return state;
  }
};
