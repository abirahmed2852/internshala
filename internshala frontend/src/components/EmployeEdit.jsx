import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  asynccurrentemploye,
  employeupdate,
} from "../store/Actions/employeActions"; // Import the action creator
import { Link, useNavigate } from "react-router-dom";
import { RiArticleLine, RiBookmarkLine, RiCloseLine } from "@remixicon/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Dropdown from "./EmployeDropdown";
import Avatar from "./EmployeAvatar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function EmployeEdit() {
  const dispatch = useDispatch(); // Get dispatch function
  const { user } = useSelector((state) => state.employe); // Assuming employee details are stored under 'user' in Redux store
  const navigate = useNavigate();
  const [formData, setFormData] = useState({}); // Initialize with empty object
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [ShowAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    // Fetch employee data when component mounts
    dispatch(asynccurrentemploye());
  }, [dispatch]);

  // Update formData whenever user data changes
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const openaddavatar = () => {
    setShowAvatar(true); // Show Editresume component when edit is clicked
  };
  const closeaddavatar = () => {
    setShowAvatar(false); // Hide Editresume component when close is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(employeupdate(formData, user._id)); // Dispatch the update action
      navigate("/employe");

      // Optionally, you can fetch the updated data again after successful update
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

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}
      {ShowAvatar && <Avatar onClose={closeaddavatar} />}

      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img
            className="w-[15%]   max-[600px]:w-[80%] ml-[20vh] max-[600px]:ml-[0vh] mt-2 "
            src="../../public/images/logo.webp"
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
      <div className="flex flex-col items-center justify-center fixed h-full w-full  ">
        <div className=" flex gap-2 items-center justify-center flex-col h-[20vh] w-[20vh]   ">
          <div className="h-[18vh] overflow-hidden border-sky-400 border-2 w-[18vh] rounded-full ">
            <img
              className="w-full h-full object-cover"
              src={user.organizationlogo.url}
              alt=""
            />
          </div>
          <h1
            onClick={openaddavatar}
            className="text-2xl text-sky-400 cursor-pointer"
          >
            Edit Profile
          </h1>
        </div>
        <div className="h-[80vh] py-5 px-10 rounded-3xl w-[30%] max-[600px]:w-[100%] bg-white ">
          <form action="" onSubmit={handleSubmit}>
            <div className="  w-full flex gap-[3vh]">
              <div className="w-[50%]  ">
                <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                  First name
                </h1>
                <input
                  className="w-full pl-[2vh] text-2xl text-black outline-sky-300  h-[6vh] border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="firstname"
                  id=""
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="John"
                />{" "}
                {formData.firstname && formData.firstname.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
              <div className="w-[50%]  ">
                <h1 className=" text-2xl font-bold mb-2 text-[#272727c1]">
                  Last name
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  name="lastname"
                  id=""
                  placeholder="Deyy"
                />{" "}
                {formData.lastname && formData.lastname.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Email
              </h1>
              <input
                className="w-full pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="email"
                id=""
                placeholder="john@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {formData.email && !/^\S+@\S+\.\S+$/.test(formData.email) && (
                <p className="text-xl mt-1 text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <div className="flex w-full gap-[5vh]">
              <div className="w-[50%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Contact number
                </h1>
                <input
                  className="h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="contact"
                  id=""
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Add contact details"
                  onKeyPress={(e) => {
                    // Allow only numbers
                    const pattern = /[0-9]/;
                    const isValidInput = pattern.test(e.key);
                    if (!isValidInput) {
                      e.preventDefault();
                    }
                  }}
                />
                {formData.contact && !/^\d{10}$/.test(formData.contact) && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter a valid 10-digit contact number
                  </p>
                )}
              </div>
              <div className="w-[50%]">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  City
                </h1>
                <input
                  className="pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                  type="text"
                  name="city"
                  id=""
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="add city details"
                />
                {formData.city && formData.city.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
              </div>
            </div>
            <div className="w-[100%]">
              <h1 className="  mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                Organization Name
              </h1>
              <input
                className=" lowercase  w-[100%] pl-[2vh]  h-[6vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                type="text"
                name="organizationname"
                id=""
                value={formData.organizationname}
                onChange={handleChange}
                placeholder="jon company"
              />
              {formData.organizationname &&
                formData.organizationname.length < 3 && (
                  <p className="text-xl mt-1 text-red-500">
                    Please enter at least 3 characters
                  </p>
                )}
            </div>
            <button
              type="submit"
              disabled={
                !formData.contact ||
                formData.contact.length !== 10 || // Disable if contact number length is not 10
                !formData.firstname ||
                formData.firstname.length < 3 || // Disable if first name length is less than 3
                !formData.lastname ||
                formData.lastname.length < 3 || // Disable if last name length is less than 3
                !formData.city ||
                formData.city.length < 3 || // Disable if city length is less than 3
                // Disable if organization name length is less than 3
                !formData.email || // Disable if email is empty
                !/^\S+@\S+\.\S+$/.test(formData.email) // Disable if email is not valid
              }
              className={`px-[4vh] mt-[5vh] py-[2vh] ml-[40vh] max-[600px]:ml-[15vh] text-2xl font-semibold rounded-2xl text-white bg-[#008BDC] ${
                (!formData.contact ||
                  formData.contact.length !== 10 ||
                  !formData.firstname ||
                  formData.firstname.length < 3 ||
                  !formData.lastname ||
                  formData.lastname.length < 3 ||
                  !formData.city ||
                  formData.city.length < 3 ||
                  !formData.email ||
                  !/^\S+@\S+\.\S+$/.test(formData.email)) &&
                "cursor-not-allowed" // Add cursor-not-allowed class if button is disabled
              }`}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmployeEdit;
