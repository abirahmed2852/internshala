import { RiCloseLine, RiPencilLine, RiUploadCloudLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditEducation,
  EditJobs,
  Resume,
} from "../store/Actions/resumeActions";
import { update } from "../store/Actions/userActions";

export default function Editjobs(props) {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.data);
  const index = props.index;
  //   //(index);
  // //(resume.resume.education[index]);
  const [formData, setFormData] = useState(resume.resume.jobs[index]);
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
      await dispatch(EditJobs(formData, formData.id)); // Dispatch the update action
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
              <h1>Edit Job Details</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Designation
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.designation}
                  onChange={handleChange}
                  name="designation"
                  placeholder="eg. Software Engineer"
                  id=""
                />
              </div>
              <div className="w-full">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Profile
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.profile}
                  onChange={handleChange}
                  name="profile"
                  placeholder="eg. Operations"
                  id=""
                />
              </div>
              <div className="w-full">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Organization
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  name="organization"
                  placeholder="eg.Internshala"
                  id=""
                />
              </div>
              <div className="w-full">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Location
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  name="location"
                  placeholder="eg.Mumbai"
                  id=""
                />
              </div>
              <div className=" mt-16 w-full flex gap-[3vh]">
                <div className="w-[45%]  ">
                  <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                    Start Year
                  </h1>
                  <input
                    className="w-full pl-[2vh] text-2xl text-black outline-sky-300  h-[6vh] border-[1px] border-[#27272748] p-2 rounded-lg"
                    type="text"
                    onChange={handleChange}
                    name="startyear"
                    value={formData.startyear}
                    id=""
                    placeholder="2020"
                  />{" "}
                </div>
                <div className="w-[45%]  ">
                  <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                    End Year
                  </h1>
                  <input
                    className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                    type="text"
                    value={formData.endyear}
                    onChange={handleChange}
                    name="endyear"
                    id=""
                    placeholder="2024"
                  />{" "}
                </div>
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
    </>
  );
}