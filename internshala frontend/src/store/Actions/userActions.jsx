import {
  saveUser,
  removeUser,
  sendmail,
  signuperror,
  signinerror,
} from "../Reducers/userSlice";
import axios from "../../utils/axios";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    //(error.response.data);
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/student/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/student/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signinerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const applyjob = (jobId) => async (dispatch) => {
  try {
    await axios.post(`/student/apply/job/${jobId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    //(error.response.data);
  }
};
export const applyinternship = (internshipId) => async (dispatch) => {
  try {
    await axios.post(`/student/apply/internship/${internshipId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    //(error.response.data);
  }
};
export const update = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/student/studentupdate/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentUser());
  } catch (error) {
    //(error.response.data);
  }
};
export const ChangePassword = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/student/reset-password/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentUser());
  } catch (error) {
    //(error.response.data);
  }
};
export const ChangePassword2 = (formData, id) => async () => {
  try {
    await axios.post(`/student/reset-password/${id}`, formData); // Pass formData to the backend
  } catch (error) {
    //(error.response.data);
  }
};
export const Delete = (userId) => async (dispatch) => {
  try {
    await axios.post(`/student/delete-account/${userId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    //(error.response.data);
  }
};
export const SendMail = (formdata) => async (dispatch) => {
  try {
    const response = await axios.post("/student/send-mail/", formdata);
    dispatch(sendmail(response.data));
  } catch (error) {
    //(error.response.data);
  }
};

export const Avatar = (formData, id) => async (dispatch) => {
  try {
    //(formData, id);
    await axios.post(`/student/avatar/${id}`, formData);
  } catch (error) {
    //(error.response.data);
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/student/signout");
    dispatch(removeUser());
  } catch (error) {
    //(error.response.data);
  }
};
