import axios from "../../utils/axios";

import {
  resumeFound,
  education,
  editjobs,
  editeducation,
  addjobs,
  addinternship,
  editinternship,
  editresp,
  editskills,
  addresp,
  editcourse,
  delaccomp,
  delprojects,
  addcourses,
  delskills,
  delinternship,
  editprojects,
  addaccomp,
  delcourse,
  addprojects,
  delresp,
  addskills,
  deleteducation,
  deljobs,
  editaccomp,
} from "../Reducers/resumeSlice";
export const Resume = () => async (dispatch) => {
  try {
    const response = await axios.get("/resume");
    // //(response.data.loggedinuserresume);
    dispatch(resumeFound(response.data.loggedinuserresume));
  } catch (error) {
    //(error);
  }
};
export const Education = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-edu", formdata);
    dispatch(education(response.data.student));
  } catch (error) {
    //(error);
  }
};

export const EditEducation = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-edu/${id}`, formdata);
    dispatch(editeducation(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelEducation = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-edu/${id}`);
    dispatch(deleteducation(response.data.student));
  } catch (error) {
    //(error);
  }
};

export const AddJobs = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-jobs", formdata);
    dispatch(addjobs(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditJobs = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-jobs/${id}`, formdata);
    dispatch(editjobs(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelJobs = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-jobs/${id}`);
    dispatch(deljobs(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const AddInternship = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-intern", formdata);
    dispatch(addinternship(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditInternship = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-intern/${id}`, formdata);
    dispatch(editinternship(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelInternship = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-intern/${id}`);
    dispatch(delinternship(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const AddResp = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-resp", formdata);
    dispatch(addresp(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditResp = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-resp/${id}`, formdata);
    dispatch(editresp(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelResp = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-resp/${id}`);
    dispatch(delresp(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const AddCourses = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-courses", formdata);
    dispatch(addcourses(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditCourse = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-courses/${id}`, formdata);
    dispatch(editcourse(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelCourse = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-courses/${id}`);
    dispatch(delcourse(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const AddProjects = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-projects", formdata);
    dispatch(addprojects(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditProjects = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-projects/${id}`, formdata);
    dispatch(editprojects(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelProjects = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-projects/${id}`);
    dispatch(delprojects(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const AddSkills = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-skills", formdata);
    dispatch(addskills(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditSkills = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-skills/${id}`, formdata);
    dispatch(editskills(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelSkills = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-skills/${id}`);
    dispatch(delskills(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const AddAccomp = (formdata) => async (dispatch) => {
  //(formdata);
  try {
    const response = await axios.post("/resume/add-acc", formdata);
    dispatch(addaccomp(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const EditAccomp = (formdata, id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/edit-acc/${id}`, formdata);
    dispatch(editaccomp(response.data.student));
  } catch (error) {
    //(error);
  }
};
export const DelAccomp = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/resume/delete-acc/${id}`);
    dispatch(delaccomp(response.data.student));
  } catch (error) {
    //(error);
  }
};
