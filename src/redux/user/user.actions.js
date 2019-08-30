import { UserActionTypes } from "./user.reducer.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
