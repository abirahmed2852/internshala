import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asynccurrentUser } from "../store/Actions/userActions";
import Login from "../components/StudentLogin";
import Dropdown from "./Studentdropdown";

import "../../public/stylesheet/home.css";
import "tailwindcss/tailwind.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Internships from "./Internships";
import Jobs from "./Jobs";
import { RiBookmarkLine } from "@remixicon/react";

const Home = () => {
  
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of the login component
  const [ShowDropdown, setShowDropdown] = useState(false);
  const internshipsRef = useRef(null);
  const jobsRef = useRef(null);

  const handleLoginClose = () => {
    setShowLogin(false);
  };
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const dispatch = useDispatch(); // Get dispatch function
  const loggedinuser = useSelector((state) => state.user); // Assuming loggedinuser details are stored under 'user' in Redux store
  //(loggedinuser.user);
  useEffect(() => {
    dispatch(asynccurrentUser()); // Fetch loggedinuser data for student when component mounts
  }, [dispatch]);

  const opendropdown = () => {
    setShowDropdown(true); // Show Editresume component when edit is clicked
  };
  const closedropdown = () => {
    setShowDropdown(false); // Hide Editresume component when close is clicked
  };

  // Check if loggedinuser data exists before rendering
  if (!loggedinuser.user) {
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
        <div className="w-[70%]  h-full">
          <img
            className="w-[15%] ml-[20vh] max-[600px]:ml-[0vh] max-[600px]:mt-[-1.5vh]  max-[600px]:w-[100%] "
            src="https://ik.imagekit.io/sunnykurmi/logo.webp?updatedAt=1708749688574"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3
            className="text-2xl cursor-pointer "
            onClick={() => scrollToRef(internshipsRef)}
          >
            Internships
          </h3>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3
            className="text-2xl cursor-pointer "
            onClick={() => scrollToRef(jobsRef)}
          >
            Jobs
          </h3>
        </div>
        <div className="flex h-16 bg-white mt-8  rounded-full flex-shrink-0 w-16 overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
          <img
            onClick={opendropdown}
            className=" h-full w-full object-cover "
            src={loggedinuser.user.avatar.url}
            alt=""
          />
        </div>
      </div>
      <div className="home1">
        <div className="text-6xl mb-[-5vh]">
          Hi, {loggedinuser.user.firstname}! 👋
        </div>

        <h2>Trending on Internshala 🔥 </h2>
        <div className="slides">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/wtc_fh_feb24-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/career_starter_internships_final-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <div ref={internshipsRef}>
        <Internships />
      </div>
      <div ref={jobsRef}>
        <Jobs />
      </div>
      <img
        className="home"
        src="https://ik.imagekit.io/sunnykurmi/home.jpg?updatedAt=1708749737993"
        alt=""
      />
      <div className=" overflow-hidden">
        <div className="marquee">
          <img
            src="https://internshala.com/static/images/homepage/top_companies.png"
            alt=""
          />
          <img
            src="https://internshala.com/static/images/homepage/top_companies.png"
            alt=""
          />
          <img
            src="https://internshala.com/static/images/homepage/top_companies.png"
            alt=""
          />
          <img
            src="https://internshala.com/static/images/homepage/top_companies.png"
            alt=""
          />
        </div>
      </div>
      <img
        className="home2"
        src="https://ik.imagekit.io/sunnykurmi/home2.jpg?updatedAt=1708749738027"
        alt=""
      />
      {showLogin && <Login onClose={handleLoginClose} />}
    </>
  );
};

export default Home;
