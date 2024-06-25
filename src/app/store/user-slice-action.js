import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userRequest(state) {
      state.loading = true;
    },
    messageSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    userFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearUserError(state) {
      state.error = null;
    },
  },
});
const userActions = userSlice.actions;

export const userMessage = (userData) => {
  return async (dispatch) => {
    dispatch(userActions.userRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/users/",
        userData,
        config
      );
      if (data.success) {
        dispatch(userActions.messageSuccess(data.user));
      }
    } catch (error) {
      dispatch(userActions.userFail(error.response.data.message));
    }
  };
};
