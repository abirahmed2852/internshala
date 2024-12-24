import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentemploye } from "../store/Actions/employeActions";
import { CreateJob } from "../store/Actions/jobsAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";
import Dropdown from "./EmployeDropdown";

function createJob() {
  const dispatch = useDispatch(); // Get dispatch function
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.employe);
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    jobtitle: "",
    prefrences: "",
    assesments: "",
    skills: "",
    perks: "",
    salary: "",
    jobtype: "In office",
    openings: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "jobtitle",
      "prefrences",
      "assesments",
      "skills",
      "perks",
      "jobtype",
      "salary",
      "openings",
      "description",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      await dispatch(CreateJob(formData));
      dispatch(asynccurrentemploye());
      navigate("/employe");
    } catch (error) {
      //(error.response.data);
    }
  };
  const opendropdown = () => {
    setShowDropdown(true); // Show Editresume component when edit is clicked
  };
  const closedropdown = () => {
    setShowDropdown(false); // Hide Editresume component when close is clicked
  };

  useEffect(() => {
    dispatch(asynccurrentemploye()); // Fetch employee data when component mounts
    // dispatch(CreateInternship());
  }, [dispatch]);

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

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}

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
            onClick={opendropdown}
            src={user.organizationlogo.url}
            alt=""
          />
        </div>
      </div>
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={"/employe"}>Go back</Link>
      </div>
      <h1 className="w-full flex items-center justify-center mt-[10vh] text-4xl ">
        Create Job
      </h1>
      <div className=" z-10 flex mb-[10vh]  justify-center  h-full w-full  ">
        <div className=" border-2 px-[5vh] mt-10   rounded-3xl w-[50%] max-[600px]:w-[100%] bg-white ">
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Enter Jobtitle
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="jobtitle"
                onChange={handleChange}
                placeholder="eg.Web developer"
                id=""
              />
              {formData.jobtitle && formData.jobtitle.length < 3 && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter at least 3 characters
                </p>
              )}
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Prefrences
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="prefrences"
                placeholder="eg. music ,dancing"
                id=""
              />
              {formData.prefrences && formData.prefrences.length < 3 && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter at least 3 characters
                </p>
              )}
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Assesments
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="assesments"
                placeholder="eg. paper"
                id=""
              />
              {formData.assesments && formData.assesments.length < 3 && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter at least 3 characters
                </p>
              )}
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Skills
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="skills"
                placeholder="eg. Data Analytics , Data Handling"
                id=""
              />
              {formData.skills && formData.skills.length < 3 && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter at least 3 characters
                </p>
              )}
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Perks
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                onChange={handleChange}
                name="perks"
                placeholder="eg.gym membership"
                id=""
              />
              {formData.perks && formData.perks.length < 3 && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter at least 3 characters
                </p>
              )}
            </div>
            <div className="w-full flex justify-between">
              <div className="w-[48%] ">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Salary (LPA)
                </h1>
                <div className=" flex gap-10">
                  <input
                    className="w-[100%] px-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                    type="text"
                    onChange={handleChange}
                    onKeyPress={(e) => {
                      // Allow only numbers
                      const pattern = /[0-9]/;
                      const isValidInput = pattern.test(e.key);
                      if (!isValidInput) {
                        e.preventDefault();
                      }
                    }}
                    name="salary"
                    placeholder="eg. 60000"
                    id=""
                  />
                  {formData.salary.length === 0 && (
                    <p className="text-xl mt-1 text-red-500">
                      Please enter salary details
                    </p>
                  )}
                </div>
              </div>
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Jobtype
                </h1>
                <select
                  className="w-[100%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  name="jobtype"
                  defaultValue={"In office"}
                  onChange={handleChange}
                  id=""
                >
                  <option value="In office">In office</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Openings
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="openings"
                  placeholder="eg. 50"
                  onChange={handleChange}
                  id=""
                  onKeyPress={(e) => {
                    // Allow only numbers
                    const pattern = /[0-9]/;
                    const isValidInput = pattern.test(e.key);
                    if (!isValidInput) {
                      e.preventDefault();
                    }
                  }}
                />
                {formData.openings.length === 0 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please provide number of openings
                  </p>
                )}
              </div>
              <div className="w-[48%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Description
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  placeholder="eg. enter job description"
                  id=""
                />
                {formData.description && formData.description.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={
                !formData.jobtitle ||
                formData.jobtitle.length < 3 || // Disable if first name length is less than 3
                !formData.prefrences ||
                formData.prefrences.length < 3 || // Disable if last name length is less than 3
                !formData.assesments ||
                formData.assesments.length < 3 || // Disable if last name length is less than 3
                !formData.perks ||
                formData.perks.length < 3 || // Disable if last name length is less than 3
                !formData.skills ||
                formData.skills.length < 3 || // Disable if last name length is less than 3
                !formData.description ||
                formData.description.length < 3 ||
                !formData.salary || // Ensure salary is not empty
                formData.salary.length === 0 ||
                !formData.openings || // Ensure openings is not empty
                formData.salary.length === 0 // Disable if last name length is less than 3
              }
              className={`px-[4vh] mt-[5vh] mb-10 py-[2vh] ml-[40vh] max-[600px]:ml-[15vh] text-2xl font-semibold rounded-2xl text-white bg-[#008BDC] ${
                (!formData.jobtitle ||
                  formData.jobtitle.length < 3 || // Disable if first name length is less than 3
                  !formData.prefrences ||
                  formData.prefrences.length < 3 || // Disable if last name length is less than 3
                  !formData.assesments ||
                  formData.assesments.length < 3 || // Disable if last name length is less than 3
                  !formData.perks ||
                  formData.perks.length < 3 || // Disable if last name length is less than 3
                  !formData.skills ||
                  formData.skills.length < 3 || // Disable if last name length is less than 3
                  !formData.description ||
                  formData.description.length < 3 ||
                  !formData.salary || // Ensure salary is not empty
                  formData.salary.length === 0 ||
                  !formData.openings || // Ensure openings is not empty
                  formData.salary.length === 0) &&
                "cursor-not-allowed" // Add cursor-not-allowed class if button is disabled
              }`}
            >
              Create Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default createJob;
