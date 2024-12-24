import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import employeReducer from "./Reducers/employeSlice";
import internshipsReducer from "./Reducers/internshipsSlice";
import jobsReducer from "./Reducers/jobsSlice";
import resumeReducer from "./Reducers/resumeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    employe: employeReducer,
    internships: internshipsReducer,
    jobs: jobsReducer,
    resume: resumeReducer,
  },
});
