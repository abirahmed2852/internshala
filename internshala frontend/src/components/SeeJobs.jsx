import React, { useEffect } from "react";
import "../../public/stylesheet/internships.css";
import "tailwindcss/tailwind.css";

import {
  RiMapPinLine,
  RiWallet3Line,
  RiCalendarLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/Actions/jobsAction";
import { Link } from "react-router-dom";

export default function Internships() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!Array.isArray(data)) {
    return <div>Error: Data is not an array</div>;
  }
  return (
    <>
      <div className="internshipparent">
        <div className="interheading">
          <h1 className="font-semibold   ">Latest Jobs on Internshala</h1>
          <div className="category">
            <h3 className="font-semibold text-xl   ">POPULAR CATEGORIES:</h3>
            <button className="font-semibold text-xl   ">Big Brands</button>
            <button className="font-semibold text-xl   ">Work From Home</button>
            <button className="font-semibold text-xl   ">Part-time</button>
            <button className="font-semibold text-xl   ">MBA</button>
            <button className="font-semibold text-xl   ">Engineering</button>
            <button className="font-semibold text-xl   ">Media</button>
            <button className="font-semibold text-xl   ">Design</button>
            <button className="font-semibold text-xl   ">Data Science</button>
          </div>
        </div>
        <div className="inter">
          {data &&
            data.map((item, index) => (
              <div key={index} className="inters">
                <button className="font-semibold   ">
                <img src="https://ik.imagekit.io/sunnykurmi/stock.png?updatedAt=1708749737137" alt="" />
                  <h3 className="font-semibold text-xl   ">Actively Hiring</h3>
                </button>
                <div className="interninfo">
                  <div className="intleft">
                    <h3 className="font-medium text-2xl   ">{item.jobtitle}</h3>
                    {item.employe && (
                      <>
                        <h4 className="font-semibold text-1xl   ">
                          {item.employe.organizationname}
                        </h4>
                      </>
                    )}
                  </div>
                  <div className="intright">
                    {item.employe && (
                      <>
                        <img src={item.employe.organizationlogo.url} alt="" />
                      </>
                    )}
                  </div>
                </div>
                <div className="map">
                  <RiMapPinLine
                    size={15}
                    color="#1a1a1aa8" // set custom `width` and `height`
                  />
                  <h4>{item.jobtype}</h4>
                </div>
                <div className="map">
                  <RiWallet3Line
                    size={15}
                    color="#1a1a1aa8" // set custom `width` and `height`
                  />
                  {item.salary && (
                    <>
                      <h4>₹ {item.salary}</h4>
                    </>
                  )}
                </div>
                <div className="view">
                  <button className="font-bold   ">Job</button>
                  <h3>
                    <Link to={`/view/job/${item._id}`}>View Details</Link>
                    <RiArrowRightSLine />
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
