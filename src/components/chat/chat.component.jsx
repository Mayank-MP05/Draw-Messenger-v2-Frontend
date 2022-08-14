import React, { useState } from "react";
import Picker from "emoji-picker-react";
import ChatHeader from "./chat-header";
import MessageTile from "./message-tile";
import MessageWritePanel from "./message-write-panel";
const ChatComponent = ({ groupHandler }) => {
  const [selectedGroup, setSelectedGroup] = groupHandler;

  return (
    <div className="w-full">
      <ChatHeader groupHandler={groupHandler} />
      <div className="relative w-full p-6 overflow-y-auto overflow-x-hidden h-4/6">
        <ul
          className="space-y-2 overflow-y-auto overflow-x-hidden h-4/6"
          style={{ height: "50vh" }}
        >
          {Array.from("x".repeat(10)).map((s) => (
            <MessageTile
              isLoading={false}
              content="Just to say something"
              timestamp={"01:30PM"}
            />
          ))}
        </ul>
      </div>
      <MessageWritePanel />
    </div>
  );
};

export default ChatComponent;
