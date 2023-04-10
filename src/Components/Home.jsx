import React from "react";
import { BsArrowRightShort, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-scroll";
import profilepictwo from "../Assets/profilepictwo.png"

const Home = () => {
      return (
            <div
                  name="home"
                  className="h-screen w-full bg-gradient-to-b from-black via-black to-pink font-signature"
            >
                  <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                        <div className="flex flex-col justify-center h-full">
                              <h2 className="text-4xl sm:text-7xl font-bold text-white mt-4">
                                    I'm a Web Developer and Writer
                              </h2>
                              <p className="text-white py-4 max-w-md">
                                    I have experience with a variety of different technologies and I am passionate about front-end and UX design.
                              </p>
    
                              <div>
                                    <Link
                                          to="portfolio"
                                          smooth
                                          duration={500}
                                          className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-darkGrey cursor-pointer"
                                    >
                                          Portfolio
                                          <span className="group-hover:rotate-90 duration-300">
                                                <BsArrowRightCircle size={20} className="ml-1" />
                                          </span>
                                    </Link>
                              </div>
                        </div>
    
                        <div>
                              <img
                                    src={profilepictwo}
                                    alt="my profile"
                                    className="rounded-1xl md:w-full object-cover translate-y-[-42px] h-200 w-200 rounded-lg z-0"
                              />
                        </div>
                  </div>
            </div>
      );
};
    
export default Home;