import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import ChatHeader from "./chat-header";
import MessageTile from "./message-tile";
import MessageWritePanel from "./message-write-panel";
const ChatComponent = ({ groupHandler, userHandler, messageList }) => {
  const [selectedGroup, setSelectedGroup] = groupHandler;
  const [user, setUser] = userHandler;
  const [localMessageList, setLocalMessageList] = useState([...messageList]);

  useEffect(() => {
    setLocalMessageList(messageList);
  }, [messageList]);

  const addMessageToQueue = (newMessageObj) => {
    setLocalMessageList([...localMessageList, newMessageObj]);
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
            <MessageTile isLoading={false} msgData={singleMsgObj} />
          ))}
          <MessageTile
            isLoading={false}
            msgData={{
              type: "TEXT",
              createdAt: new Date().getTime(),
              createdBy: "wghfbsjfddfsf",
              groupId: "sdfkjsfhksd",
              content: "Message one from Chat.component.jsx",
            }}
            timestamp={"01:30PM"}
          />
          <MessageTile
            isLoading={false}
            msgData={{
              type: "LINK",
              createdAt: new Date().getTime(),
              createdBy: "wghfbsjfddfsf",
              groupId: "sdfkjsfhksd",
              content: "Message two from Chat.component.jsx 😂😂",
              title: "Google.ocm",
            }}
            timestamp={"01:30PM"}
          />
          <MessageTile
            isLoading={false}
            msgData={{
              type: "DRAWING",
              createdAt: new Date().getTime(),
              createdBy: "wghfbsjfddfsf",
              groupId: "sdfkjsfhksd",
              content: "Message two from Chat.component.jsx 😂😂",
              title: "Google.ocm",
              imgUrl:
                "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            }}
            timestamp={"01:30PM"}
          />
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
