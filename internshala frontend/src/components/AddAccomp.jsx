import { RiCloseLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddJobs,
  AddInternship,
  Education,
  AddAccomp,
  Resume,
  AddResp,
} from "../store/Actions/resumeActions";

export default function addaccomp(props) {
  const dispatch = useDispatch();
  const addeducation = useSelector((state) => state.resume.data);
  // //(addeducation.resume.education);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    dispatch(Resume());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(AddAccomp(formData));
      props.onClose();
      dispatch(Resume());
    } catch (error) {
      //(error.response.data);
    }
  };

  if (!addeducation) {
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
              <h1>Additional details</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full">
                <br />
                <h1 className=" text-[#2727279a]  text-xl font-bold">
                  Add your accomplishments such as rewards, recognitions, test
                  scores, certifications, etc. here. You may also add
                  information such as seminars/workshops you have attended or
                  any interests/hobbies you have pursued.
                </h1>
                <br />
                <textarea
                  className="w-full pl-[2vh] flex-col resize-none items-start  flex text-wrap h-[20vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  placeholder="E.g. Secured 1st rank among 500 entries in national level story writing competition organised by Internshala."
                  onChange={handleChange}
                  name="accomplishments"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
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
