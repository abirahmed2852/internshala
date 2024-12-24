import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asynccurrentemploye } from "../store/Actions/employeActions"; // Import the action creator
import { Link, useParams } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiArticleLine,
  RiBookmarkLine,
} from "@remixicon/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Review() {
  const { id } = useParams(); // Get route params
  const dispatch = useDispatch(); // Get dispatch function
  const { user } = useSelector((state) => state.employe); // Assuming employee details are stored under 'user' in Redux store
  useEffect(() => {
    dispatch(asynccurrentemploye()); // Fetch employee data when component mounts
  }, [dispatch]);

  // Check if employee data exists before rendering
  if (!user) {
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

  // Check if internships exist before rendering
  if (!user.internships) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <p>No internships found.</p>
      </div>
    );
  }

  let resume;
  const array = user.internships;
  array.forEach((element) => {
    const newarr = [...element.students];
    newarr.forEach(function (elem) {
      if (elem._id == id) {
        resume = elem;
      }
    });
  });

  return (
    <>
      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img
            className="w-[15%]   max-[600px]:w-[80%] ml-[20vh] max-[600px]:ml-[0vh] mt-2 "
            src="https://ik.imagekit.io/sunnykurmi/logo.webp?updatedAt=1708749688574"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <Link to={"/internship/create"}>
            <h3 className="text-2xl max-[600px]:text-xs max-[600px]:text-sm  whitespace-nowrap text-cyan-600">
              + Internship
            </h3>
          </Link>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <Link to={"/job/create"}>
            <h3 className="text-2xl max-[600px]:text-xs max-[600px]:text-sm text-cyan-600  whitespace-nowrap">
              {" "}
              + Create Job
            </h3>{" "}
          </Link>
        </div>
        <div className="  flex overflow-hidden flex-shrink-0 ml-16 justify-center items-center font-semibold text-[#272727e4]">
          <img
            className="h-16 w-16 flex-shrink-0 object-cover rounded-full"
            src={user.organizationlogo.url}
            alt=""
          />
        </div>
      </div>
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <div className="flex justify-center items-center text-[#151515d2] text-5xl font-semibold w-full h-[20vh]  ">
        Resume
      </div>
      <div className=" flex mb-[15vh] justify-center items-center  w-full  ">
        <div className=" w-[60%] max-[600px]:w-[100%] h-full   border-2 px-[7vh] py-[5vh] ">
          <div className=" w-full flex justify-between pr-[10vh]">
            <div className="pb-[5vh]">
              <h1 className=" flex gap-[5vh] text-5xl font-semibold   text-[#151515d2]  ">
                {resume.firstname} {resume.lastname}
              </h1>
              <h1 className="text-2xl mt-2  text-[#1c1c1c9d]  font-semibold ">
                {resume.email}
              </h1>
              <h1 className="text-2xl mt-2  text-[#1c1c1c9d]  font-semibold ">
                +91 {resume.contact}
              </h1>
              <h1 className="text-2xl mt-2  text-[#1c1c1c9d]  font-semibold ">
                {resume.city}
              </h1>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              EDUCATION
            </div>
            <div className="w-[60%] ">
              {resume.resume.education &&
                resume.resume.education.map((item, index) => (
                  <div key={index} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-2xl font-semibold ">
                        {item.degree} {item.branch}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.organization}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.startyear}-{item.endyear}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        CGPA {item.grade}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              WORK EXPERIENCE
            </div>
            <div className="w-[60%] ">
              {resume.resume.jobs &&
                resume.resume.jobs.map((item, index) => (
                  <div key={index} className=" flex">
                    <div className=" mb-5 w-[80%]">
                      <div className="text-[#151515d0] text-2xl font-semibold ">
                        {item.designation}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.organization}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.location}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.startyear}-{item.endyear}
                      </div>
                      <button className="font-semibold text-[#1515159d]  px-2 border-2 text-xl  ">
                        Job
                      </button>
                    </div>
                  </div>
                ))}
              {resume.resume.internships &&
                resume.resume.internships.map((item, index) => (
                  <div key={index} className=" flex">
                    <div className=" w-[80%] mb-5">
                      <div className="text-[#151515d0] text-2xl font-semibold ">
                        {item.profile}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.organization}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.location}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.startyear}-{item.endyear}
                      </div>
                      <button className="font-semibold text-[#1515159d]  px-2 border-2 text-xl  ">
                        Internship
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              POSITIONS OF <br /> RESPONSIBILITY
            </div>
            <div className="w-[60%] ">
              {resume.resume.responsibility &&
                resume.resume.responsibility.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="text-[#151515d0] w-[80%] mb-5 text-2xl font-semibold ">
                      {item.responsibility}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              TRAININGS/ COURSES
            </div>
            <div className="w-[60%] ">
              {resume.resume.courses &&
                resume.resume.courses.map((item, index) => (
                  <div key={index} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-2xl font-semibold ">
                        {item.course}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.organization}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.location}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.startyear}-{item.endyear}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              ACADEMICS/ <br /> PERSONAL PROJECTS
            </div>
            <div className="w-[60%] ">
              {resume.resume.projects &&
                resume.resume.projects.map((item, index) => (
                  <div key={index} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-2xl font-semibold ">
                        {item.title}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.description}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        {item.startmonth}-{item.endmonth}
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-2xl font-semibold">
                        <Link
                          className="text-blue-500"
                          to={`${item.projectlink}`}
                        >
                          {item.projectlink}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              SKILLS
            </div>
            <div className="w-[70%] ">
              <div className="grid grid-cols-2">
                {resume.resume.skills &&
                  resume.resume.skills.map((item, index) => (
                    <div
                      key={index}
                      className=" w-[90%] flex mb-5 justify-between text-[#151515d0] text-2xl font-semibold "
                    >
                      {item.skills}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              ACCOMPLISHMENTS/ <br /> ADDITIONAL DETAILS
            </div>
            <div className="w-[60%] ">
              {resume.resume.accomplishments &&
                resume.resume.accomplishments.map((item, index) => (
                  <div key={index} className="flex">
                    <div
                      key={index}
                      className="w-[80%] text-[#151515d0] text-2xl font-semibold "
                    >
                      {item.accomplishments}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
