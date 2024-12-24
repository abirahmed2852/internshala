import { RiCloseLine, RiPencilLine, RiUploadCloudLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditEducation,
  EditJobs,
  EditInternship,
  EditResp,
  EditProjects,
  EditSkills,
  EditCourse,
  EditAccomp,
  Resume,
  DelEducation,
  DelJobs,
  DelInternship,
  DelResp,
  DelCourse,
  DelProjects,
  DelSkills,
  DelAccomp,
} from "../store/Actions/resumeActions";
import { update } from "../store/Actions/userActions";

export default function Editaccomp(props) {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.data);
  const index = props.index;
  //   //(index);
  // //(resume.resume.education[index]);
  const [formData, setFormData] = useState(
    resume.resume.education[index] ||
      resume.resume.jobs[index] ||
      resume.resume.internships[index] ||
      resume.resume.courses[index] ||
      resume.resume.projects[index] ||
      resume.resume.accomplishments[index] ||
      resume.resume.skills[index] ||
      resume.resume.responsibilities[index]
  );
  // //(formData);
  useEffect(() => {
    dispatch(Resume());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      (await dispatch(DelEducation(formData.id))) ||
        (await dispatch(DelJobs(formData.id))) ||
        (await dispatch(DelInternship(formData.id))) ||
        (await dispatch(DelCourse(formData.id))) ||
        (await dispatch(DelSkills(formData.id))) ||
        (await dispatch(DelAccomp(formData.id))) ||
        (await dispatch(DelProjects(formData.id))) ||
        (await dispatch(DelResp(formData.id)));
      dispatch(Resume());
      props.onClose();
    } catch (error) {
      //(error.response.data);
    }
  };

  if (!resume) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <img
          className="w-[20%]"
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt=""
        />
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className=" z-10 flex items-center justify-center fixed h-full w-full bg-black/30 ">
        <div className="py-[4vh] px-0 h-[17vh]  rounded-xl w-[25%] max-[600px]:w-[90%] bg-white ">
          <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
            <h1>Are you sure you want to delete this</h1>
          </div>{" "}
          <div className="flex items-center justify-end text-[#272727e4]  w-full pr-[5vh] gap-5 text-3xl font-bold">
            <button
              onClick={props.onClose}
              type="submit"
              className="px-[3vh] mt-10 py-[1vh] text-2xl font-semibold rounded-md border-2  text-[#008BDC] "
            >
              No
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-[3vh] mt-10 py-[1vh] text-2xl font-semibold rounded-md text-white bg-[#008BDC] "
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
