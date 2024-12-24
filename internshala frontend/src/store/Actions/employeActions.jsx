import {
  saveUser,
  removeUser,
  sendmail,
  employsigninerror,
  employsignuperror,
} from "../Reducers/employeSlice";
import axios from "../../utils/axios";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    //(error.response.data);
  }
};

export const asyncemployesignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/signup", user);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(employsignuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncemployesignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/signin", user);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(employsigninerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncremoveEmploye = () => async (dispatch, getState) => {
  try {
    await axios.get("/employe/signout");
    dispatch(removeUser());
  } catch (error) {
    //(error.response.data);
  }
};

export const employeupdate = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/employeupdate/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};
export const deleteinternship = (id) => async (dispatch) => {
  try {
    await axios.post(`/employe/delete/internship/${id}`); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};
export const deletejob = (id) => async (dispatch) => {
  try {
    await axios.post(`/employe/delete/job/${id}`); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};
export const employeavatar = (formData, id) => async (dispatch) => {
  try {
    //(formData, id);
    await axios.post(`/employe/avatar/${id}`, formData);
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};
export const SendMail2 = (formdata) => async (dispatch) => {
  try {
    const response = await axios.post("/employe/send-mail/", formdata);
    dispatch(sendmail(response.data));
  } catch (error) {
    //(error.response.data);
  }
};

export const ChangePassword3 = (formData, id) => async () => {
  try {
    await axios.post(`/employe/reset-password/${id}`, formData); // Pass formData to the backend
  } catch (error) {
    //(error.response.data);
  }
};

export const ChangePassword4 = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/reset-password/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};

export const Delete2 = (userId) => async (dispatch) => {
  try {
    await axios.post(`/employe/delete-account/${userId}`);
    dispatch(asynccurrentemploye());
  } catch (error) {
    //(error.response.data);
  }
};
