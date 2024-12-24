import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncemployesignup } from "../store/Actions/employeActions";
import { Link, useNavigate } from "react-router-dom";
import "../../public/stylesheet/signup.css";
import "../../public/stylesheet/employesignup.css";
import EmployeLogin from "../components/EmployLogin";

export default function EmployeSignup() {
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();
  const { isAuth, error } = useSelector((state) => state.employe);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of the login component

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contact: "",
  });

  const employehandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signupemploye = async (event) => {
    event.preventDefault();
    dispatch(asyncemployesignup(formData));
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/employe");
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
            alt="" />
        <button
          className="text-2xl font-semibold"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </div>
      <div className="employecontainer">
        <div className="employeformbox">
          <form>
            <h4>Official Email Id</h4>
            <input
              type="text"
              name="email"
              className="text-2xl font-normal"
              value={formData.email}
              onChange={employehandleChange}
              placeholder="john@example.com"
            />
            {error && error.includes("user already exists with this email") && (
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
              className="text-2xl font-normal"
              name="password"
              value={formData.password}
              onChange={employehandleChange}
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
            <h4>First Name</h4>
            <input
              type="text"
              className="text-2xl font-normal"
              name="firstname"
              value={formData.firstname}
              onChange={employehandleChange}
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
              onChange={employehandleChange}
              placeholder="Doe"
            />
            {error &&
              error.includes("Last name should be 4 character long") && (
                <p className="font-medium text-xl text-red-400">
                  Last name should be 4 character long
                </p>
              )}
            <h4>Mobile Number</h4>
            <input
              className="text-2xl font-normal"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={employehandleChange}
              placeholder="Doe"
            />
            {error && error.includes("Contact is not valid") && (
              <p className="font-medium text-xl text-red-400">
                Contact is not valid
              </p>
            )}
            <h4></h4>
            <h5>By signing up, you agree to our Terms and Conditions.</h5>
            <button
              disabled={!formValid}
              onClick={signupemploye}
              id="employeformbtn"
            >
              Post for Free
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
      <div className="faltuimage"></div>
      {showLogin && <EmployeLogin onClose={handleLoginClose} />}
    </>
  );
}
