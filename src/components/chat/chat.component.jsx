import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import ChatHeader from "./chat-header";
import MessageTile from "./message-tile";
import MessageWritePanel from "./message-write-panel";
import { io } from "socket.io-client";

const ChatComponent = ({ groupHandler, userHandler, messageList }) => {
  const [selectedGroup, setSelectedGroup] = groupHandler;
  const [user, setUser] = userHandler;
  const [localMessageList, setLocalMessageList] = useState([...messageList]);
  const [messagesEnd, setMessagesEnd] = useState(null);
  const [socket, setSocket] = useState(null);
  const newSocket = io("http://localhost:9001");
  newSocket.on("chat", (msgRecieved) => {
    console.log("SOCKET Incoming", msgRecieved);
    addMessageToQueue(msgRecieved);
  });
  useEffect(() => {
    setLocalMessageList(messageList);
    scrollToBottomMsgQueue();

    // const newSocket = io("http://localhost:9001");
    // setSocket(newSocket);

    // newSocket.on("chat", (msgRecieved) => {
    //   console.log("SOCKET Incoming", msgRecieved);
    //   addMessageToQueue(msgRecieved);
    // });
  }, [messageList]);

  const addMessageToQueue = (newMessageObj) => {
    setLocalMessageList([...localMessageList, newMessageObj]);
    scrollToBottomMsgQueue();
  };

  const scrollToBottomMsgQueue = () => {
    if (messagesEnd) messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full">
      <ChatHeader groupHandler={groupHandler} />
      <div className="relative w-full p-6 overflow-y-auto overflow-x-hidden h-4/6">
        <ul
          className="space-y-2 overflow-y-auto overflow-x-hidden h-4/6"
          style={{ height: "50vh" }}
        >
          {localMessageList.map((singleMsgObj) => (
            <MessageTile isLoading={false} msgData={singleMsgObj} user={user} />
          ))}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              setMessagesEnd(el);
            }}
          ></div>
        </ul>
      </div>
      <MessageWritePanel
        user={user}
        group={selectedGroup}
        addMessageToQueue={addMessageToQueue}
      />
    </div>
  );
};

export default ChatComponent;
