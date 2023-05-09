import React from "react";

// Contact section component
const Contact = () => {
      return (
            <div 
                  name="contact"
                  className="w-full h-screen bg-background p-4 text-white font-signature pt-36"
            >
            
                  <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                  <div className="pb-8">
                        <p className="text-4xl font-bold border-b-4 border-gray-500 text-black font-nav_bar tracking-widest text-center p-2">
                              Contact
                        </p>
                        <p className="pt-4 pb-4 text-black font-sig_three tracking-widest text-center text-xl">Submit the form below to get in touch with me</p>
                  </div>

                  <div className=" flex justify-center items-center">
                        {/* Form with inputs and button */}
                        <form
                              // Form endpoint for data submission
                              action="https://getform.io/f/2450d06c-5bc9-4ed4-9bff-718bc11724c8"
                              method="POST"
                              className=" flex flex-col w-full md:w-1/2"
                        >
                              <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none font-sig_three tracking-widest"
                              />
                              <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none font-sig_three tracking-widest"
                              />
                              <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="10"
                                    className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none font-sig_three tracking-widest"
                              ></textarea>

                              <button className="bg-white px-6 py-3 my-8 mx-auto text-xl flex items-center rounded-md hover:scale-110 duration-300 font-sig_three tracking-widest text-black border border-black">
                                    Let's talk
                              </button>
                        </form>
                  </div>
            </div>
      </div>
      );
};

export default Contact;