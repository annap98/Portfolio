import React from "react";
import Ecom from "../Assets/Portfolio/Ecom.png";
import pressPic from "../Assets/Portfolio/pressPic.png";

// This is the section of the portfolio that displays the writing and web development samples 
const Portfolio = () => {                             
      
      // Create an array that holds objects that contain web devlopment portfolio examples
      const webDevPortfolios = [
            {
                  id: 1,
                  src: Ecom, 
                  href: "https://github.com/annap98/EcomStore",
                  href2: "https://github.com/"
            },
      ];

      // Create an array that holds objects that contain writing portfolio examples
      const writingPortfolios = [
            {
                  id: 1,
                  src: pressPic,
                  href: "/pressRelease.pdf"
            },
      ];


      return (
            <div
                  name="portfolio"
                  className="bg-gradient-to-b from-black to-pink w-full text-white md:h-screen font-signature"
            >
                  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                        <div className="pb-8">
                              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                                    Portfolio
                              </p>
                              <p className="py-6">Check out some of my work here</p>
                        </div>

                        {/* Map through the web development examples object */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 -mt-4 mb-4">
                              {webDevPortfolios.map(({ id, src, href, href2 }) => (
                                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                          <img
                                                src={src}
                                                alt=""
                                                className="rounded-md duration-200 hover:scale-105"
                                          />
                                          <div className="flex items-center justify-center">
                                          {/*<a href={href2} target="_blank" rel="noreferrer">
                                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                                      Demo
                                                </button>
                              </a>*/}
                                          <a href={href} target="_blank" rel="noreferrer">
                                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                                      Code
                                                </button>
                                          </a>
                                          </div>
                                    </div>
                              ))}
                              
                              {/* Map through the writing examples object */}
                              {writingPortfolios.map(({ id, src, href }) => (
                                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                          <img
                                                src={src}
                                                alt=""
                                                className="rounded-md duration-200 hover:scale-105"
                                                href={href}
                                          />
                                          <div className="flex items-center justify-center">
                                                <a href={href} target="_blank" rel="noreferrer">
                                                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 type=button">
                                                            View
                                                      </button>
                                                </a>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Portfolio;