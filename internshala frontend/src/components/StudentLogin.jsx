import React, { useEffect, useState } from "react";
import "../../public/stylesheet/login.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RiCloseLine } from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignin } from "../store/Actions/userActions";

function Login({ onClose }) {
  const navigate = useNavigate();
  const { isAuth, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [studentFormData, setStudentFormData] = useState({
    studentemail: "",
    studentpassword: "",
  });

  const handleStudentChange = (e) => {
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value });
  };

  //(studentFormData);
  const signinStudent = async (event) => {
    event.preventDefault();
    dispatch(asyncsignin(studentFormData));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/student");
    }
  }, [isAuth, navigate]);
  
  return (
    <>
      <div className="loginparent">
        <div className="loginbox">
          <RiCloseLine
            size={34} // set custom `width` and `height`
            className="my-icon" // add custom class name
            onClick={onClose} // Add onClick handler to close the login component
          />
          <div className="loginnav">
            <h1 className="text-3xl font-semibold">Student Login</h1>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <form action="">
                <h3>Email</h3>
                <input
                  type="text"
                  name="email"
                  className="text-3xl font-normal"
                  value={studentFormData.email}
                  onChange={handleStudentChange}
                  id=""
                  placeholder="john@example.com"
                />
                {error &&
                  error.includes("user not found with this email address ") && (
                    <p className="font-medium text-xl text-red-400">
                      user not found with this email address
                    </p>
                  )}
                <h3>Password</h3>
                <input
                  type="password"
                  name="password"
                  value={studentFormData.password}
                  onChange={handleStudentChange}
                  id=""
                  placeholder="Must be at least 6 characters"
                />
                {error && error.includes("wrong credentials") && (
                  <p className="font-medium text-xl text-red-400">
                    wrong credentials
                  </p>
                )}
                <h4>
                  <Link to="/student/forgot">forgot password?</Link>
                </h4>
                <button onClick={signinStudent} id="formbtn">
                  Login
                </button>
                <h5>
                  New to internshala ? Register (
                  <Link to="/student/signup">student</Link>/
                  <Link to="/employe/signup">company</Link>)
                </h5>
              </form>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Login;
