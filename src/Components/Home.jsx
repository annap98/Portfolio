import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-scroll";
import profilepictwo from "../Assets/profilepictwo.png"

// Home section component
const Home = () => {
      return (
            <div
                  name="home"
                  className="h-screen w-full bg-background"
            >
                  <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                        <div className="flex flex-col justify-center h-full">
                              <h2 className="text-6xl sm:text-7xl font-nav_bar text-main mt-28 tracking-widest content-center text-center">
                                    I'm a Web Designer and UGC Creator
                              </h2>
                              <p className="text-black py-4 max-w-md font-sig_three text-center tracking-widest text-xl">
                                    I'm passionate about creating engaging and impactful digital experiences
                              </p>
    
                              <div className="items-center">
                                    <Link
                                          to="portfolio"
                                          smooth
                                          duration={500}
                                          className="group text-black w-fit px-6 py-3 my-2 flex rounded-md bg-white cursor-pointer font-sig_three border border-black ml-36 tracking-widest text-xl"
                                    >
                                          Portfolio
                                          <span className="group-hover:rotate-90 duration-300">
                                                <BsArrowRightCircle size={20} className="ml-4" />
                                          </span>
                                    </Link>
                              </div>
                        </div>
    
                        <div className="mt-24 ml-16">
                              <img
                                    src={profilepictwo}
                                    alt="my profile"
                                    className=" translate-y-[-42px] .w-1/2 rounded-lg z-0 content-end"
                              />
                        </div>
                  </div>
            </div>
      );
};
    
export default Home;