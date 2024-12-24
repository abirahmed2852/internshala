import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Resume } from "../store/Actions/resumeActions";
import {
  RiArrowLeftLine,
  RiBookmarkLine,
  RiDeleteBin5Line,
  RiPencilLine,
} from "@remixicon/react";
import Editresume from "./Editresume";
import Education from "./Education";
import AddJobs from "./AddJobs";
import AddInternship from "./AddInternship";
import AddResp from "./AddResp";
import AddCourse from "./AddCourse";
import AddProjects from "./AddProjects";
import AddSkills from "./AddSkills";
import AddAccomp from "./AddAccomp";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import EditEducation from "./EditEducation";
import EditJobs from "./EditJobs";
import EditInternship from "./EditInternship";
import EditResp from "./EditResp";
import EditCourse from "./EditCourse";
import EditProjects from "./EditProjects";
import EditSkills from "./EditSkill";
import EditAccomp from "./EditAccomp";
import Dropdown from "./Studentdropdown";
import DelEducation from "./DelEducation";

export default function Resumepage() {
  const dispatch = useDispatch(); // Get dispatch function
  const resume = useSelector((state) => state.resume.data); // Assuming resume details are stored under 'user' in Redux store
  // //(resume);
  const [showEditResume, setShowEditResume] = useState(false);
  const [ShowAvatar, setShowAvatar] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [ShowDropdown, setShowDropdown] = useState(false);

  const [ShowEducation, setShowEducation] = useState(false);
  const [ShowAddJobs, setShowAddJobs] = useState(false);
  const [ShowAddInternship, setShowAddInternship] = useState(false);
  const [ShowAddResp, setShowAddResp] = useState(false);
  const [ShowAddCourses, setShowAddCourses] = useState(false);
  const [ShowAddProjects, setShowAddProjects] = useState(false);
  const [ShowAddSkills, setShowAddSkills] = useState(false);
  const [ShowAddAccomp, setShowAddAccomp] = useState(false);

  const [ShowEditEducation, setShowEditEducation] = useState(false);
  const [ShowEditJobs, setShowEditJobs] = useState(false);
  const [ShowEditInternship, setShowEditInternship] = useState(false);
  const [ShowEditResp, setShowEditResp] = useState(false);
  const [ShowEditCourse, setShowEditCourse] = useState(false);
  const [ShowEditProjects, setShowEditProjects] = useState(false);
  const [ShowEditSkills, setShowEditSkills] = useState(false);
  const [ShowEditAccomp, setShowEditAccomp] = useState(false);

  const [ShowDelEducation, setShowDelEducation] = useState(false);

  useEffect(() => {
    dispatch(Resume()); // Fetch resume data for student when component mounts
  }, [dispatch]);

  const handleEditClick = () => {
    setShowEditResume(true); // Show Editresume component when edit is clicked
  };
  const handleCloseClick = () => {
    setShowEditResume(false); // Hide Editresume component when close is clicked
  };

  const openeducation = () => {
    setShowEducation(true); // Show Editresume component when edit is clicked
  };
  const closeeducation = () => {
    setShowEducation(false); // Hide Editresume component when close is clicked
  };
  const openaddjobs = () => {
    setShowAddJobs(true); // Show Editresume component when edit is clicked
  };
  const closeaddjobs = () => {
    setShowAddJobs(false); // Hide Editresume component when close is clicked
  };
  const openaddinternship = () => {
    setShowAddInternship(true); // Show Editresume component when edit is clicked
  };
  const closeaddinternship = () => {
    setShowAddInternship(false); // Hide Editresume component when close is clicked
  };
  const openaddresp = () => {
    setShowAddResp(true); // Show Editresume component when edit is clicked
  };
  const closeaddresp = () => {
    setShowAddResp(false); // Hide Editresume component when close is clicked
  };
  const openaddcourse = () => {
    setShowAddCourses(true); // Show Editresume component when edit is clicked
  };
  const closeaddcourse = () => {
    setShowAddCourses(false); // Hide Editresume component when close is clicked
  };
  const openaddprojects = () => {
    setShowAddProjects(true); // Show Editresume component when edit is clicked
  };
  const closeaddprojects = () => {
    setShowAddProjects(false); // Hide Editresume component when close is clicked
  };
  const openaddskills = () => {
    setShowAddSkills(true); // Show Editresume component when edit is clicked
  };
  const closeaddskills = () => {
    setShowAddSkills(false); // Hide Editresume component when close is clicked
  };
  const openaddaccomp = () => {
    setShowAddAccomp(true); // Show Editresume component when edit is clicked
  };
  const closeaddaccomp = () => {
    setShowAddAccomp(false); // Hide Editresume component when close is clicked
  };
  const openaddavatar = () => {
    setShowAvatar(true); // Show Editresume component when edit is clicked
  };
  const closeaddavatar = () => {
    setShowAvatar(false); // Hide Editresume component when close is clicked
  };

  const openediteducation = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditEducation(true); // Show Editresume component when edit is clicked
  };
  const closeediteducation = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditEducation(false); // Hide Editresume component when close is clicked
  };
  const openeditjobs = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditJobs(true); // Show Editresume component when edit is clicked
  };
  const closeeditjobs = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditJobs(false); // Hide Editresume component when close is clicked
  };
  const openeditinternship = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditInternship(true); // Show Editresume component when edit is clicked
  };
  const closeeditinternship = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditInternship(false); // Hide Editresume component when close is clicked
  };
  const openeditresp = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditResp(true); // Show Editresume component when edit is clicked
  };
  const closeeditresp = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditResp(false); // Hide Editresume component when close is clicked
  };
  const openeditcourse = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditCourse(true); // Show Editresume component when edit is clicked
  };
  const closeeditcourse = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditCourse(false); // Hide Editresume component when close is clicked
  };
  const openeditprojects = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditProjects(true); // Show Editresume component when edit is clicked
  };
  const closeeditprojects = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditProjects(false); // Hide Editresume component when close is clicked
  };
  const openeditskills = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditSkills(true); // Show Editresume component when edit is clicked
  };
  const closeeditskills = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditSkills(false); // Hide Editresume component when close is clicked
  };
  const openeditaccomp = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditAccomp(true); // Show Editresume component when edit is clicked
  };
  const closeeditaccomp = () => {
    setEditingIndex(null); // Reset the index when closing the edit Jobs modal
    setShowEditAccomp(false); // Hide Editresume component when close is clicked
  };

  const opendelducation = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowDelEducation(true); // Show Editresume component when edit is clicked
  };
  const closedelducation = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowDelEducation(false); // Hide Editresume component when close is clicked
  };

  const opendropdown = () => {
    setShowDropdown(true); // Show Editresume component when edit is clicked
  };
  const closedropdown = () => {
    setShowDropdown(false); // Hide Editresume component when close is clicked
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
  const education = resume.resume.education;
  const jobs = resume.resume.jobs;
  const internship = resume.resume.internships;
  const responsibility = resume.resume.responsibilities;
  const courses = resume.resume.courses;
  const projects = resume.resume.projects;
  const skills = resume.resume.skills;
  const accomplishments = resume.resume.accomplishments;

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}

      {ShowAvatar && <Avatar onClose={closeaddavatar} />}

      {ShowAddAccomp && <AddAccomp onClose={closeaddaccomp} />}
      {ShowAddAccomp && <AddAccomp onClose={closeaddaccomp} />}
      {ShowAddSkills && <AddSkills onClose={closeaddskills} />}
      {ShowAddProjects && <AddProjects onClose={closeaddprojects} />}
      {ShowAddCourses && <AddCourse onClose={closeaddcourse} />}
      {ShowAddResp && <AddResp onClose={closeaddresp} />}
      {ShowAddInternship && <AddInternship onClose={closeaddinternship} />}
      {ShowAddJobs && <AddJobs onClose={closeaddjobs} />}
      {ShowEducation && <Education onClose={closeeducation} />}
      {showEditResume && <Editresume onClose={handleCloseClick} />}

      {ShowEditJobs && (
        <EditJobs index={editingIndex} onClose={closeeditjobs} />
      )}
      {ShowEditInternship && (
        <EditInternship index={editingIndex} onClose={closeeditinternship} />
      )}
      {ShowEditEducation && (
        <EditEducation index={editingIndex} onClose={closeediteducation} />
      )}
      {ShowEditResp && (
        <EditResp index={editingIndex} onClose={closeeditresp} />
      )}
      {ShowEditCourse && (
        <EditCourse index={editingIndex} onClose={closeeditcourse} />
      )}
      {ShowEditProjects && (
        <EditProjects index={editingIndex} onClose={closeeditprojects} />
      )}
      {ShowEditSkills && (
        <EditSkills index={editingIndex} onClose={closeeditskills} />
      )}
      {ShowEditAccomp && (
        <EditAccomp index={editingIndex} onClose={closeeditaccomp} />
      )}

      {ShowDelEducation && (
        <DelEducation index={editingIndex} onClose={closedelducation} />
      )}

      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%]  h-full">
          <img
            className="w-[15%] ml-[20vh] max-[600px]:ml-[0vh] max-[600px]:mt-[-1.5vh]  max-[600px]:w-[100%] "
            src="https://ik.imagekit.io/sunnykurmi/logo.webp?updatedAt=1708749688574"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl cursor-pointer ">Internships</h3>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl cursor-pointer ">Jobs</h3>
        </div>
        <div className="flex h-16 bg-white mt-8  rounded-full flex-shrink-0 w-16 overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
          <img
            onClick={opendropdown}
            className=" h-full w-full object-cover "
            src={resume.avatar.url}
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
        <div className=" w-[60%] max-[600px]:w-full h-full   border-2 px-[7vh] py-[5vh] max-[600px]:px-2 max-[600px]:py-2 ">
          <div className=" w-full flex justify-between pr-[10vh] max-[600px]:pr-0 ">
            <div className="pb-[5vh]">
              <h1 className=" flex gap-[5vh] text-5xl font-semibold   text-[#151515d2]  ">
                {resume.firstname} {resume.lastname}
                <RiPencilLine
                  size={25}
                  className="mt-1 cursor-pointer"
                  onClick={handleEditClick}
                  color="#1c1c1c9d" // set custom `width` and `height`
                />
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
            <div className="">
              <div className=" w-[15vh] h-[15vh] border-2 overflow-hidden rounded-full   ">
                <img
                  className="w-full h-full object-cover "
                  src={resume.avatar.url}
                  alt=""
                />
              </div>
              <div
                className=" cursor-pointer mt-1 text-[#008BDC]  text-2xl font-medium"
                onClick={openaddavatar}
              >
                Edit profile picture
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-2xl font-semibold ">
              EDUCATION
            </div>
            <div className="w-[60%] ">
              {education &&
                education.map((item, index) => (
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
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={25}
                        className="mt-1 cursor-pointer"
                        onClick={() => openediteducation(index)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={25}
                        onClick={() => opendelducation(index)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                ))}
              <div
                onClick={openeducation}
                className=" mt-10 text-[#008BDC]  text-2xl font-medium"
              >
                <div className="cursor-pointer">+ Add Education</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              WORK EXPERIENCE
            </div>
            <div className="w-[60%] ">
              {jobs &&
                jobs.map((item, index) => (
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
                    <div className=" flex gap-10">
                      <RiPencilLine
                        size={25}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditjobs(index)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={25}
                        onClick={() => opendelducation(index)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                ))}
              {internship &&
                internship.map((item, index) => (
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
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={25}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditinternship(index)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={25}
                        onClick={() => opendelducation(index)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                ))}
              <div className="flex gap-[10vh]">
                <div
                  onClick={openaddjobs}
                  className=" mt-10 text-[#008BDC]  text-2xl font-medium"
                >
                  <div className="cursor-pointer">+ Add Job</div>
                </div>
                <div
                  onClick={openaddinternship}
                  className=" mt-10 text-[#008BDC]  text-2xl font-medium"
                >
                  <div className="cursor-pointer">+ Add Intership</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              POSITIONS OF <br /> RESPONSIBILITY
            </div>
            <div className="w-[60%] ">
              {responsibility &&
                responsibility.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="text-[#151515d0] w-[80%] mb-5 text-2xl font-semibold ">
                      {item.responsibility}
                    </div>
                    <div className="">
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={25}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditresp(index)}
                          color="#1c1c1c9d" // set custom `width` and `height`
                        />
                        <RiDeleteBin5Line
                          size={25}
                          onClick={() => opendelducation(index)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d" // set custom `width` and `height`
                        />
                      </div>
                    </div>
                  </div>
                ))}

              <div
                onClick={openaddresp}
                className=" mt-10 text-[#008BDC]  text-2xl font-medium"
              >
                <div className="cursor-pointer">
                  + Add position of responsibility
                </div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              TRAININGS/ COURSES
            </div>
            <div className="w-[60%] ">
              {courses &&
                courses.map((item, index) => (
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
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={25}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditcourse(index)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={25}
                        onClick={() => opendelducation(index)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                ))}
              <div
                onClick={openaddcourse}
                className=" mt-10 text-[#008BDC]  text-2xl font-medium"
              >
                <div className="cursor-pointer">+ Add training/ course</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              ACADEMICS/ <br /> PERSONAL PROJECTS
            </div>
            <div className="w-[60%] ">
              {projects &&
                projects.map((item, index) => (
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
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={25}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditprojects(index)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={25}
                        onClick={() => opendelducation(index)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                ))}
              <div
                onClick={openaddprojects}
                className=" mt-10 text-[#008BDC]  text-2xl font-medium"
              >
                <div className="cursor-pointer">
                  + Add academic/ personal project
                </div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              SKILLS
            </div>
            <div className="w-[70%] ">
              <div className="grid grid-cols-2">
                {skills &&
                  skills.map((item, index) => (
                    <div
                      key={index}
                      className=" w-[90%] flex mb-5 justify-between text-[#151515d0] text-2xl font-semibold "
                    >
                      {item.skills}
                      <div className="flex gap-5">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditskills(index)}
                          color="#1c1c1c9d" // set custom `width` and `height`
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => opendelducation(index)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d" // set custom `width` and `height`
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div
                onClick={openaddskills}
                className=" mt-10 text-[#008BDC]  text-2xl font-medium"
              >
                <div className="cursor-pointer">+ Add skill</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]  w-full  ">
            <div className="w-[30%]   text-[#1515159d] text-2xl font-semibold ">
              ACCOMPLISHMENTS/ <br /> ADDITIONAL DETAILS
            </div>
            <div className="w-[60%] ">
              {accomplishments &&
                accomplishments.map((item, index) => (
                  <div key={index} className="flex">
                    <div
                      key={index}
                      className="w-[80%] text-[#151515d0] text-2xl font-semibold "
                    >
                      {item.accomplishments}
                    </div>
                    <div className="flex gap-5">
                      <RiPencilLine
                        size={25}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditaccomp(index)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={25}
                        onClick={() => opendelducation(index)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                ))}

              <div
                onClick={openaddaccomp}
                className=" mt-10 text-[#008BDC]  text-2xl font-medium"
              >
                <div className="cursor-pointer">
                  + Add accomplishment/ additional detail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="https://ik.imagekit.io/sunnykurmi/footer.png?updatedAt=1708749737577"
          alt=""
        />
      </div>
    </>
  );
}
