const INITIAL_STATE = {
  MenuIsOpen: true,
  HomePage: false
};

export const ToggleMenu = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOOGLE_MENU":
      return { ...state, MenuIsOpen: !state.MenuIsOpen };
    default:
      return state;
  }
};
