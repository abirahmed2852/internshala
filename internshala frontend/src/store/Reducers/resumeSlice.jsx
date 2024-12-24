// internshipsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resumeFound(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    education(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editeducation(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    deleteducation(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addjobs(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editjobs(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    deljobs(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addinternship(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editinternship(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    delinternship(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addresp(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editresp(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    delresp(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addcourses(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editcourse(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    delcourse(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addprojects(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editprojects(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    delprojects(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addskills(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editskills(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    delskills(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    addaccomp(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editaccomp(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    delaccomp(state, action) {
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const {
  delprojects,
  resumeFound,
  education,
  delinternship,
  deljobs,
  deleteducation,
  delskills,
  editskills,
  delaccomp,
  editcourse,
  editprojects,
  delcourse,
  delresp,
  editresp,
  editjobs,
  editinternship,
  editeducation,
  addjobs,
  addinternship,
  addresp,
  addcourses,
  addprojects,
  addskills,
  addaccomp,
  editaccomp,
} = resumeSlice.actions;
export default resumeSlice.reducer;
