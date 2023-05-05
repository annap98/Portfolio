import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

//Navigation Bar component
const NavBar = () => {

      // Set a state variable called nav to track the navigation state
      const [nav, setNav] = useState(false);

      // Define an array of objects that represent each navigation link 
      const links = [
            {
                  id: 1,
                  link: "home",
            },
            {
                  id: 2,
                  link: "about",
            },
            {
                  id: 3,
                  link: "portfolio",
            },
            {
                  id: 4,
                  link: "experience",
            },
            {
                  id: 5,
                  link: "contact",
            },
      ];

      return (

            
            <div className="flex justify-between items-center w-full h-34 px-4 bg-background fixed z-10">
                  <div>
                        <h1 className="text-6xl w-94  pl-28 pt-20 h-92 top-38 text-sig_color ml-2 font-nav_bar tracking-widest">Anna</h1>
                  </div>

                  {/* Render the navigation links on desktop */}
                  <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                              <li
                                    key={id}
                                    className="cursor-pointer text-lg capitalize font-medium text-black hover:scale-105 hover:underline underline-offset-4 duration-200 font-sig_three pt-20 pr-28 flex "
                              >
                                    <Link to={link} smooth duration={500}>
                                          {link}
                                    </Link>
                              </li>
                        ))}
                  </ul>

                  {/* Render the hamburger button menu on mobile */}
                  <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer pr-4 z-10 text-black md:hidden pt-20"
                  >
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                  </div>

                  {/* Render the navigation links on mobile */}
                  {nav && (
                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-background  text-black font-sig_three tracking-widest">
                              {links.map(({ id, link }) => (
                                    <li
                                          key={id}
                                          className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                    >
                              
                                          <Link
                                                onClick={() => setNav(!nav)}
                                                to={link}
                                                smooth
                                                duration={500}
                                          >
                                                {link}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                  )}
            </div>

      );
};

export default NavBar;