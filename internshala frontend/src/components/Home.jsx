import React, { useRef, useState } from "react";
import "../../public/stylesheet/home.css";
import "tailwindcss/tailwind.css";
import Login from "../components/StudentLogin";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Internships from "./SeeInternships";
import Jobs from "./SeeJobs";
import { Link } from "react-router-dom";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of the login component
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

  return (
    <>
      <div className="homenav">
        <div className="homenavleft">
          <img 
            src="https://ik.imagekit.io/sunnykurmi/logo.webp?updatedAt=1708749688574"
            alt="" />
          <h2
            className="cursor-pointer"
            onClick={() => scrollToRef(internshipsRef)}
          >
            Internships
          </h2>
          <h2 className="cursor-pointer" onClick={() => scrollToRef(jobsRef)}>
            Jobs
          </h2>
        </div>
        <div className="homenavright">
          <button
            onClick={() => setShowLogin(true)}
            className="font-bold text-xl"
          >
            Login
          </button>
          <button className="font-bold text-xl">
            <Link to={`/student/signup`}>Candidate Sign-up</Link>
          </button>

          <button className="font-bold text-xl">
            <Link to={`/employe/signup`}>Employer Sign-up</Link>
          </button>
        </div>
      </div>
      <div className="home1">
        <h1>Make your dream career a reality</h1>
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
            {/* <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp"
                alt=""
              />
            </SwiperSlide> */}
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
      <img className="home" src="https://ik.imagekit.io/sunnykurmi/home.jpg?updatedAt=1708749737993" alt="" />
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
      <img className="home2" src="https://ik.imagekit.io/sunnykurmi/home2.jpg?updatedAt=1708749738027" alt="" />
      {showLogin && <Login onClose={handleLoginClose} />}
    </>
  );
}
