import React from "react";
import ChatComponent from "../components/chat/chat.component";
import UserCard from "../components/homepage/user-card";
import Navbar from "../components/common/navbar";
import { useParams } from "react-router-dom";

const ChatViewHomePage = ({ userHandler, groupHandler }) => {
  const [loggedInUser, setLoggedInUser] = userHandler;

  const { id } = useParams();
  console.log("group id: ", id);
  return (
    <>
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[95%] md:w-[80%] shadow-2xl">
        <div className="w-4/12 p-2 hidden md:block">
          {" "}
          <UserCard userHandler={userHandler} />
        </div>
        <div className="md:w-8/12 p-2 sm:w-full">
          <ChatComponent groupHandler={groupHandler} />
        </div>
      </div>
    </>
  );
};

export default ChatViewHomePage;
