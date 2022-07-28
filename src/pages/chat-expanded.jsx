import React from "react";
import ChatComponent from "../components/chat/chat.component";
import Navbar from "../components/common/navbar";

const ChatViewExpanededPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[80%] shadow-2xl">
        <div className="p-2 sm:w-full">
          <ChatComponent />
        </div>
      </div>
    </>
  );
};

export default ChatViewExpanededPage;
