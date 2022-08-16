import React from "react";
import UserCard from "../components/homepage/user-card";
import Navbar from "../components/common/navbar";
import TestComp from "../components/common/test";

import HeroSectionImg from "../assets/hero-section.svg";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[80%] shadow-2xl">
        <div
          id="hero"
          className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50"
        >
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap flex-row -mx-4 justify-center">
              <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
                <img
                  src={HeroSectionImg}
                  className="w-full max-w-full h-auto"
                  alt="creative agency"
                />
              </div>

              <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
                <div className="text-center lg:text-left mt-6 lg:mt-0">
                  <div className="mb-12">
                    <h1 className="text-4xl leading-normal text-black font-bold mb-4">
                      Building the Ever Connected
                      <br />
                      Closer-Together World🌍
                      <span
                        data-toggle="typed"
                        data-options='{"strings": ["Online Marketing", "Web Design", "Mobile Apps", "Brand Identity", "Social Content"]}'
                      ></span>
                    </h1>
                    <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                      We help you to stay connected to your loved ones and close friends by giving truly sleek seamless chatting experience even on localhost :))
                    </p>
                  </div>
                  <button
                    className="cursor-pointer py-2.5 px-10 inline-block text-center leading-normal text-white bg-purple-700 hover:bg-purple-900 border-b border-gray-100 hover:ring-0 focus:outline-none focus:ring-0 mr-4"
                    href="#portfolio"
                  >
                    Start Chatting ...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
