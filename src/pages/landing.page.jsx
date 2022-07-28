import React from "react";
import UserCard from "../components/homepage/user-card";
import Navbar from "../components/common/navbar";
import TestComp from "../components/common/test";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[80%] shadow-2xl">
        <img src="https://c.tenor.com/cVdLW-0baz0AAAAM/cats-chat.gif" />
      </div>
    </>
  );
};

export default LandingPage;
