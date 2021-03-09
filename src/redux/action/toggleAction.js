import {TOGGLE_DARKMODE} from '../constants/toggleConstants'

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  payload: {
    isDarkMode
  }
});
