import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  error: null, // Include error state
};

export const userSlice = createSlice({
  name: "employe",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
    },
    sendmail(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    deleteinternship(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    deletejob(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    employsignuperror: (state, action) => {
      state.error = action.payload; // Set error when signup fails
    },
    employsigninerror: (state, action) => {
      state.error = action.payload; // Set error when signup fails
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveUser,
  employsigninerror,
  employsignuperror,
  removeUser,
  sendmail,
  deleteinternship,
  deletejob,
} = userSlice.actions;

export default userSlice.reducer;
