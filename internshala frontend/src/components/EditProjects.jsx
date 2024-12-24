import { RiCloseLine, RiPencilLine, RiUploadCloudLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditEducation,
  EditJobs,
  EditInternship,
  EditResp,
  EditProjects,
  EditCourse,
  Resume,
} from "../store/Actions/resumeActions";
import { update } from "../store/Actions/userActions";

export default function Editprojects(props) {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.data);
  const index = props.index;
  //   //(index);
  // //(resume.resume.education[index]);
  const [formData, setFormData] = useState(resume.resume.projects[index]);
  // //(formData);
  useEffect(() => {
    dispatch(Resume());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(EditProjects(formData, formData.id)); // Dispatch the update action
      // Optionally, you can fetch the updated data again after successful update
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
        <div className="py-5 px-10 rounded-3xl w-[30%] max-[600px]:w-[90%] bg-white ">
          <RiCloseLine
            size={30}
            onClick={props.onClose}
            className="ml-[52vh] max-[600px]:ml-[90%] cursor-pointer  "
            color="#1c1c1c9d" // set custom `width` and `height`
          />
          <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
            <h1>Project Details</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Title
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                value={formData.title}
                onChange={handleChange}
                name="title"
                placeholder="eg. Operations"
                id=""
              />
            </div>
            <div className=" mt-16 w-full flex gap-[3vh]">
              <div className="w-[45%]  ">
                <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                  Start Month
                </h1>
                <input
                  className="w-full pl-[2vh] text-2xl text-black outline-sky-300  h-[6vh] border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.startmonth}
                  onChange={handleChange}
                  name="startmonth"
                  id=""
                  placeholder="2020"
                />{" "}
              </div>
              <div className="w-[45%]  ">
                <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                  End Month
                </h1>
                <input
                  value={formData.endmonth}
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  onChange={handleChange}
                  name="endmonth"
                  id=""
                  placeholder="2024"
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Description
              </h1>

              <br />
              <textarea
                className="w-full pl-[2vh] flex-col resize-none items-start  flex text-wrap h-[20vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                placeholder="Short description of project"
                onChange={handleChange}
                name="responsibility"
                id=""
                value={formData.responsibility}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Project Link
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                value={formData.projectlink}
                onChange={handleChange}
                name="projectlink"
                placeholder="eg.http://myproject.com"
                id=""
              />
            </div>

            <button
              type="submit"
              className="px-[4vh] mt-10 py-[2vh] ml-[40vh] max-[600px]:ml-[60%] text-2xl font-semibold rounded-2xl text-white bg-[#008BDC] "
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}