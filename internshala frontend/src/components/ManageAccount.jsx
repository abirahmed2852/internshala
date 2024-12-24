import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ChangePassword,
  Delete,
  asynccurrentUser,
  update,
} from "../store/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiArticleLine,
  RiBookmarkLine,
  RiCloseLine,
} from "@remixicon/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Dropdown from "./EmployeDropdown";
import Avatar from "./EmployeAvatar";

export default function ManageAccount() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  //(user);
  const [formData, setFormData] = useState({});
  const [confirmation, setConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      setPasswordError(e.target.value.length < 6);
    }
  };

  const handleConfirmationChange = (e) => {
    setConfirmation(e.target.value);
  };

  const handleSubmit = async (e) => {
    toast("Email Changed");
    e.preventDefault();
    try {
      await dispatch(update(formData, user._id));
      dispatch(asynccurrentUser());
    } catch (error) {
      //(error.response.data);
    }
  };

  const handleSubmit2 = async (e) => {
    toast("Password Changed");
    e.preventDefault();
    if (formData.password.length >= 6) {
      setPasswordError(false);
      try {
        await dispatch(ChangePassword(formData, user._id));
        dispatch(asynccurrentUser());
      } catch (error) {
        //(error.response.data);
      }
    } else {
      setPasswordError(true);
    }
  };

  const handleSubmit3 = async (e) => {
    navigate("/");
    window.location.reload();
    e.preventDefault();
    if (confirmation.toLowerCase() === "yes") {
      try {
        await dispatch(Delete(user._id));
        dispatch(asynccurrentUser());
      } catch (error) {
        //(error.response.data);
      }
    } else {
      // Handle case where confirmation is not "yes"
      alert("Please type 'yes' to confirm deletion.");
    }
  };

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
      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img
            className="w-[15%]  max-[600px]:w-[60%] ml-[20vh] max-[600px]:ml-[1vh] "
            src="https://ik.imagekit.io/sunnykurmi/logo.webp?updatedAt=1708749688574"
            alt=""
          />
        </div>
      </div>
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <div className="w-full flex items-center justify-center mt-[10vh] max-[600px]:mt-[5vh] text-6xl mb-[-5vh] max-[600px]:mb-[-10vh]">
        Account Services
      </div>
      <div className="w-full flex gap-[5vh] flex-col items-center justify-center py-[10vh] px-[20vh] max-[600px]:px-[5vh] h-[80vh] ">
        <div className="flex max-[600px]:flex-col  w-[40vw] justify-between  items-center">
          <h3 className="text-4xl">Change Email</h3>
          <form
            className=" h-[10vh] flex gap-5 items-center justify-center "
            action=""
            onSubmit={handleSubmit}
          >
            <input
              value={formData.email}
              onChange={handleChange}
              className="w-[20vw] max-[600px]:w-[50vw] pl-[2vh]  h-[5vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
              type="email"
              name="email"
              id=""
              placeholder="Enter New Email"
            />
            <button className="w-[14vh] h-[5.5vh] text-white font-semibold text-2xl rounded-xl bg-[#008bdcf2]">
              Submit
            </button>
          </form>
        </div>
        <div className="flex max-[600px]:flex-col w-[40vw]  justify-between  items-center">
          <h3 className="text-4xl   max-[600px]:whitespace-nowrap ">
            Change Password
          </h3>
          <form
            onSubmit={handleSubmit2}
            className=" h-[10vh] flex gap-5 items-center justify-center "
            action=""
          >
            <input
              className="w-[20vw] max-[600px]:w-[50vw] pl-[2vh]  h-[5vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
              type="password"
              name="password"
              onChange={handleChange}
              id=""
              placeholder="Enter New Password"
            />
            <button
              disabled={passwordError}
              className={`w-[14vh] h-[5.5vh] text-white font-semibold text-2xl rounded-xl bg-[#008bdcf2] ${
                passwordError ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex max-[600px]:flex-col w-[40vw]  justify-between  items-center">
          <h3 className="text-4xl  max-[600px]:whitespace-nowrap ">
            Delete My Account
          </h3>
          <form
            className=" h-[10vh] flex gap-5 items-center justify-center "
            action=""
            onSubmit={handleSubmit3}
          >
            <input
              className="w-[20vw] max-[600px]:w-[50vw] pl-[2vh]  h-[5vh] text-2xl outline-red-500   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Write 'yes' to confirm"
              value={confirmation}
              onChange={handleConfirmationChange}
            />
            <button
              disabled={confirmation.toLowerCase() !== "yes"}
              className={`w-[14vh] h-[5.5vh] text-white font-semibold text-2xl rounded-xl bg-[#ff3838e2] ${
                confirmation.toLowerCase() !== "yes" &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
