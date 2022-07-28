import React, { useState } from "react";
import Picker from "emoji-picker-react";
import ChatHeader from "./chat-header";
import MessageTile from "./message-tile";
import MessageWritePanel from "./message-write-panel";
const ChatComponent = () => {
  return (
    <div className="w-full">
      <ChatHeader />
      <div className="relative w-full p-6 overflow-y-auto overflow-x-hidden h-4/6">
        <ul
          className="space-y-2 overflow-y-auto overflow-x-hidden h-4/6"
          style={{ height: "50vh" }}
        >
          <MessageTile
            isLoading={true}
            content="Just to say something"
            timestamp={"01:30PM"}
          />
          <li className="flex justify-end">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
              <span className="block">how are you?</span>
            </div>
          </li>
          <li className="flex justify-end">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
              <span className="block">how are you?</span>
            </div>
          </li>
          <li className="flex justify-end">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
              <span className="block">how are you?</span>
            </div>
          </li>
          <li className="flex justify-start">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
              <span className="block">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
          </li>
        </ul>
      </div>
      <MessageWritePanel />
    </div>
  );
};

export default ChatComponent;
