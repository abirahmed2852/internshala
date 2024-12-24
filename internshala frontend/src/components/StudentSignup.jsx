import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignup } from "../store/Actions/userActions";
import StudentLogin from "../components/StudentLogin";
import "../../public/stylesheet/signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const { isAuth, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of the login component
  //(error);
  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signupuser = async (event) => {
    event.preventDefault();
    dispatch(asyncsignup(formData));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/student");
    }
  }, [isAuth, navigate]);
  useEffect(() => {
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setFormValid(isFormValid);
  }, [formData]);
  return (
    <>
      <div className="logo">
        <img
          src="https://ik.imagekit.io/sunnykurmi/logo.webp?updatedAt=1708749688574"
          alt=""
        />
      </div>
      <div className="container">
        <div className="signupbox">
          <h1>Sign-up and apply for free</h1>
          <h3>1,50,000+ companies hiring on Internshala</h3>
          <div className="formbox">
            <form>
              <h4>First Name</h4>
              <input
                type="text"
                className="text-2xl font-normal"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="John"
              />
              {error &&
                error.includes("First name should be 4 character long") && (
                  <p className="font-medium text-xl text-red-400">
                    First name should be 4 character long
                  </p>
                )}
              <h4>Last Name</h4>
              <input
                type="text"
                className="text-2xl font-normal"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Doe"
              />
              {error &&
                error.includes("Last name should be 4 character long") && (
                  <p className="font-medium text-xl text-red-400">
                    Last name should be 4 character long
                  </p>
                )}
              <h4>Email</h4>
              <input
                type="text"
                name="email"
                className="text-2xl font-normal"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
              {error &&
                error.includes("user already exists with this email") && (
                  <p className="font-medium text-xl text-red-400">
                    User already exists with this email
                  </p>
                )}
              {error && error.includes("Please fill a valid email address") && (
                <p className="font-medium text-xl text-red-400">
                  Please fill a valid email address
                </p>
              )}
              <h4>Password</h4>
              <input
                type="password"
                name="password"
                className="text-2xl font-normal"
                value={formData.password}
                onChange={handleChange}
                placeholder="Must be at least 6 characters"
              />
              {error &&
                error.includes(
                  "password should not exceed more than 15 characters"
                ) && (
                  <p className="font-medium text-xl text-red-400">
                    password should not exceed more than 15 characters
                  </p>
                )}
              {error &&
                error.includes("password should be atleast 6 characters") && (
                  <p className="font-medium text-xl text-red-400">
                    password should be atleast 6 characters
                  </p>
                )}
              <h4></h4>
              <h5>By signing up, you agree to our Terms and Conditions.</h5>
              <button onClick={signupuser} id="formbtn" disabled={!formValid}>
                Sign Up
              </button>
            </form>
            <h4>
              Already registered?{" "}
              <Link to="#" onClick={() => setShowLogin(true)}>
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
      {showLogin && <StudentLogin onClose={handleLoginClose} />}
    </>
  );
}
