import {TOGGLE_DARKMODE} from '../constants/toggleConstants'

const toggleReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.payload.isDarkMode };
    default:
      return state;
  }
};

export {
  toggleReducer
}
