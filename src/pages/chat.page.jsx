import React from "react";
import ChatComponent from "../components/chat/chat.component";
import UserCard from "../components/homepage/user-card";
import Navbar from "../components/common/navbar";

const ChatViewHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[80%] shadow-2xl">
        <div className="w-4/12 p-2 hidden md:block">
          {" "}
          <UserCard />
        </div>
        <div className="md:w-8/12 p-2 sm:w-full">
          <ChatComponent />
        </div>
      </div>
    </>
  );
};

export default ChatViewHomePage;
