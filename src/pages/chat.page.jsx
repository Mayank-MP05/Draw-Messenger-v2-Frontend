import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

import ChatComponent from "../components/chat/chat.component";
import UserCard from "../components/homepage/user-card";
import Navbar from "../components/common/navbar";
import { useParams } from "react-router-dom";
import APIClient from "../api/common";

const ChatViewHomePage = ({ userHandler, groupHandler }) => {
  const [loggedInUser, setLoggedInUser] = userHandler;
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = groupHandler;
  const [messageList, setMessageList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    APIClient({
      route: "/group/getSingleGroup",
      payload: {
        groupId: id,
      },
      method: "POST",
      successFn: (res) => {
        setGroup(res);
      },
      errorFn: (err) => {
        console.log(err);
      },
      finallyFn: () => {
        setLoading(false);
      },
    });
    setLoading(true);

    APIClient({
      route: "/group/getMessages",
      payload: {
        groupId: id,
      },
      method: "POST",
      successFn: (res) => {
        setMessageList(res);
      },
      errorFn: (err) => {
        console.log(err);
      },
      finallyFn: () => {
        setLoading(false);
      },
    });
  }, []);
  return (
    <>
      <div className="flex flex-row rounded-xl md:mt-6 mx-auto w-[95%] md:w-[80%] shadow-2xl">
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div className="w-4/12 p-2 hidden md:block">
              {" "}
              <UserCard userHandler={userHandler} />
            </div>
            <div className="md:w-8/12 p-2 sm:w-full">
              <ChatComponent
                messageList={messageList}
                groupHandler={[group, setGroup]}
                userHandler={userHandler}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatViewHomePage;
