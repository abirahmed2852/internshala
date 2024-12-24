import React, { useEffect, useState } from "react";
import "../../public/stylesheet/internshipdetail.css";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss/tailwind.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { internshipdetail } from "../store/Actions/internshipsAction";
import {
  applyinternship,
  asynccurrentUser,
} from "../store/Actions/userActions";
import { deleteinternship } from "../store/Actions/employeActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  RiArrowLeftLine,
  RiCalendarLine,
  RiDeleteBin5Line,
  RiDoorOpenLine,
  RiGroupLine,
  RiMapPinLine,
  RiPlayCircleLine,
  RiWallet3Line,
} from "@remixicon/react";

export default function InternshipDetail() {
  const { id } = useParams(); // Accessing the ID from URL params
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.internships.data);
  // const { user } = useSelector((state) => state.employe);
  const navigate = useNavigate();
  // const apply = user.appliedinternships;
  // //(user);

  useEffect(() => {
    dispatch(asynccurrentUser()); // Fetch loggedinuser data for student when component mounts
  }, [dispatch]);

  const handledelete = () => {
    navigate("/employe");
    dispatch(deleteinternship(id));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(internshipdetail(id)); // Dispatching action with the ID
        setIsLoading(false); // Update loading state after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch, id]);

  if (isLoading) {
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
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <div className="interparent">
        <div className="flex items-center justify-center gap-5 mb-5">
          <h1 className=" text-5xl font-semibold">{data.profile} Intern</h1>
          <RiDeleteBin5Line
            onClick={handledelete}
            size={15}
            className="mt-1 cursor-pointer"
            color="#1c1c1c9d" // set custom `width` and `height`
          />
        </div>
        <div className="interparent2">
          <button className="font-semibold text-xl">
            <img
              src="https://ik.imagekit.io/sunnykurmi/stock.png?updatedAt=1708749737137"
              alt=""
            />
            Actively hiring
          </button>
          <div className="w-full h-24 flex ">
            <div className="w-[50%]">
              <h3 className="text-3xl font-semibold  text-[#090909e0]  ">
                {data.profile}
              </h3>
              <h4 className="text-2xl font-semibold mt-1  text-[#212121c5] ">
                {data.employe.organizationname}
              </h4>
            </div>
            <div className="w-[50%] flex justify-end">
              <img
                className="w-[20%] h-full object-cover"
                src={data.employe.organizationlogo.url}
                alt=""
              />
            </div>
          </div>
          <div className="flex mt-2 gap-2 align-middle ">
            <RiMapPinLine
              size={15}
              color="#1a1a1aa8" // set custom `width` and `height`
            />
            <h2 className="text-2xl">{data.internshiptype}</h2>
          </div>
          <div className=" mt-6 w-full h-24  flex">
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiPlayCircleLine
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-xl font-semibold  text-[#212121c5] ">
                  START DATE
                </h3>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                  {data.from}
                </h1>
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiCalendarLine
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-xl font-semibold  text-[#212121c5] ">
                  DURATION
                </h3>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                  {data.duration}
                </h1>
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiWallet3Line
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-xl font-semibold  text-[#212121c5] ">
                  STIPEND
                </h3>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                  ₹ {data.stipend.amount}/month
                </h1>
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <div className="flex gap-2 align-middle ">
                <RiDoorOpenLine
                  size={15}
                  className="mt-1"
                  color="#1a1a1aa8" // set custom `width` and `height`
                />
                <h3 className="text-xl font-semibold  text-[#212121c5] ">
                  OPENINGS
                </h3>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold text-[#090909e0]  ">
                  Total {data.openings}
                </h1>
              </div>
            </div>
          </div>
          <div className="">
            <button className="interbtn font-semibold text-1xl  ">
              Internship
            </button>
          </div>
          <div className=" flex align-middle items-center gap-2 al mt-[-2vh] mb-5 text-xl font-semibold text-[#090909c1]  ">
            <RiGroupLine
              size={15}
              className="mt-1"
              color="#1a1a1aa8" // set custom `width` and `height`
            />
            <h3 className="mt-1">{data.students.length} Applicants</h3>
          </div>
          <hr />
          <div className="">
            <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
              About the internship
            </h3>
            <div className=" mt-4 text-2xl ">
              <h3 className="font-semibold text-[#2b2b2bd2]    ">
                {data.responsibility}
              </h3>
            </div>
            <div className=" mt-10">
              <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                Skill(s) required
              </h3>
            </div>
            <div className=" mt-4 text-2xl ">
              <h3 className="font-semibold text-[#2b2b2bd2]    ">
                {data.skills}
              </h3>
            </div>
            <div className=" mt-10">
              <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                Perks
              </h3>
            </div>
            <div className=" mt-4 text-2xl ">
              <h3 className="font-semibold text-[#2b2b2bd2]    ">
                {data.perks}{" "}
              </h3>
            </div>
            <div className=" mt-10">
              <h3 className="text-3xl font-semibold mt-5  text-[#090909e0]   ">
                Assessment
              </h3>
            </div>
            <div className=" mt-4 text-2xl ">
              <h3 className="font-semibold text-[#2b2b2bd2]    ">
                {data.assesments}
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <img
            src="https://ik.imagekit.io/sunnykurmi/footer.png?updatedAt=1708749737577"
            alt=""
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
