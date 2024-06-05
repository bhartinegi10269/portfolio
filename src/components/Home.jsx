import React from "react";
import img from "../assets/img.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SocialLinks from "./SocialLinks";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex pt-10 md:pt-0 flex-col justify-center h-full">
          <h2 className="text-1xl sm:text-5xl font-bold text-blue-400 tracking-widest	">
            Hi, I'm<br/>
            <span>
              <strong className="text-7xl">Bharti Negi </strong>
              </span> <br/>
              <span className="text-3xl">Web Developer</span>
 
          </h2>
          
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>
        <div className="pb-14 md:py-0">
          {/* <img
            src={img}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-full"
          /> */}
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
