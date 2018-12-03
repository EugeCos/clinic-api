import { UPDATE_SIDEBAR_MENU_SELECTION } from "./types";

// Update current page
export const updateCurrentPage = page => {
  return {
    type: UPDATE_SIDEBAR_MENU_SELECTION,
    payload: page
  };
};
