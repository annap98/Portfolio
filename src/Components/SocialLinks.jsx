import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";

// Side bar containing social links and resume
const SocialLinks = () => {
      
      // Create an array holding objects that contain the social media links
      const links = [
            /*{
                  id: 1,
                  child: (
                        <>
                              LinkedIn <FaLinkedin size={30} />
                        </>
                  ),
                  href: "https://linkedin.com",
                  style: "rounded-tr-md",
            },
            {
                  id: 2,
                  child: (
                        <>
                              Twitter < AiFillTwitterCircle size={30} />
                        </>
                  ),
                  href: "https://twitter.com",
                  style: "rounded-tr-md",
            },*/
            {
                  id: 1,
                  child: (
                        <>
                              GitHub <FiGithub size={30} />
                        </>
                  ),
                  href: "https://github.com/annap98",
            },
            {
                  id: 2,
                  child: (
                        <>
                              Mail <AiOutlineMail size={30} />
                        </>
                  ),
                  href: "mailto:pittann11@gmail.com",
            },
            {
                  id: 3,
                  child: (
                        <>
                              Resume <RiArticleLine size={30} />
                        </>
                  ),
                  href: "/resume.pdf",
                  style: "rounded-br-md",
                  download: true,
            },
      ];

      return (
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                  <ul>
                        
                        {/* Map through the social links objects */}
                        {links.map(({ id, child, href, style, download }) => (
                              <li
                                    key={id}
                                    className={
                                          "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                                          " " +
                                          style
                                    }
                              >
                                    <a
                                          href={href}
                                          className="flex justify-between items-center w-full text-yellow font-signature"
                                          download={download}
                                          target="_blank"
                                          rel="noreferrer"
                                    >
                                          {child}
                                    </a>
                              </li>
                        ))}
                  </ul>
            </div>
      );
};

export default SocialLinks;