import React, { useEffect, useState } from "react";
import "../../public/stylesheet/home.css";
import "tailwindcss/tailwind.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  ChangePassword,
  ChangePassword2,
  SendMail,
} from "../store/Actions/userActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangePassword3, SendMail2 } from "../store/Actions/employeActions";

export default function Forgot() {
  const data = useSelector((state) => state.employe.data);
  const [formdata, setformdata] = useState("");
  const [formData, setformData] = useState("");
  const [token, settoken] = useState("");
  const [id, setid] = useState("");
  const [url, seturl] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      settoken(data.emailemploye.resetPasswordToken);
      setid(data.emailemploye._id);
      seturl(data.url);
    }
  }, [data]);

  function handleChange(e) {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleChange2(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(SendMail2(formdata));
    } catch (error) {
      //(error.response.data);
    }
  };
  if (token === "1") {
    toast("Email Sent Successfully");
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      dispatch(ChangePassword3(formData, id));
    } catch (error) {
      //(error.response.data);
    }
  };

  return (
    <>
      <div className="homenav">
        <div className="homenavleft">
          <img src="../../public/images/logo.webp" alt="" />
        </div>
        <div className="homenavright ml-[40vh] ">
          <button className="font-bold text-xl">
            <Link to={`/student/signup`}>Candidate Sign-up</Link>
          </button>
          <button className="font-bold text-xl">
            <Link to={`/employe/signup`}>Employer Sign-up</Link>
          </button>
        </div>
      </div>
      <div className="w-full flex items-center mt-[10vh] justify-center text-4xl font-semibold text-gray-700 ">
        Forgot Password
      </div>
      <div className="w-full flex-col flex items-center mt-[2vh] justify-center text-2xl font-medium text-gray-500 ">
        <div className="w-[30%]">
          Please enter your e-mail address. You will receive an e-mail along
          with a link which can be used to reset your password.
        </div>
        <form
          className=" h-[10vh] flex gap-5 items-center justify-center "
          action=""
          onSubmit={handleSubmit}
        >
          <input
            value={formdata.email}
            onChange={handleChange}
            className="w-[20vw] pl-[2vh]  h-[5vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
          />
          <button className="w-[14vh] h-[5.5vh] text-white font-semibold text-2xl rounded-xl bg-[#008bdcf2]">
            Submit
          </button>
        </form>
      </div>
      {token === "1" && (
        <div className="w-full  gap-2 flex-col flex items-center mt-[2vh] justify-center text-2xl font-medium text-gray-500 ">
          <form
            onSubmit={handleSubmit2}
            className=" h-[10vh] flex gap-5 items-center justify-center "
          >
            <input
              className="w-[20vw] pl-[2vh]  h-[5vh] text-2xl outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange2}
            />
            <button
              className="w-[14vh] h-[5.5vh] text-white font-semibold text-2xl rounded-xl bg-[#008bdcf2]"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
