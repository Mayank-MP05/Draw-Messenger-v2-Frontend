import Picker from "emoji-picker-react";
import React, { useState } from "react";
import DrawingCanvasComponent from "./drawing-canvas.component";
import { io } from "socket.io-client";
const MessageWritePanel = ({ user, group, addMessageToQueue }) => {
  const [messageInput, setMessageInput] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiPanel, setShowEmojiPanel] = useState(false);
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(emojiObject);
    const { emoji } = emojiObject;
    setMessageInput(`${messageInput}${emoji || ""}`);
    setShowEmojiPanel(false);
    setShowDrawingCanvas(false);
  };

  const messageChangeHandler = (e) => {
    const newMsg = e.target.value;
    setMessageInput(newMsg);
  };

  const msgSendBtnClickHandler = () => {
    if (messageInput) {
      // Check if message has link in it
      const isLinkPresent =
        messageInput.includes("http") || messageInput.includes("www");

      const msgObjToSend = {
        type: "TEXT",
        content: messageInput,
        createdAt: new Date().getTime(),
        groupId: group._id,
        userId: "62e01d89b39acc922137766c",
      };

      if (isLinkPresent) {
        msgObjToSend["type"] = "LINK";
        const slicedArray = messageInput.split(" ");
        const linkFilter = slicedArray.filter((singleWord) => {
          return singleWord.includes("http") || singleWord.includes("www");
        });
        if (linkFilter && linkFilter.length > 0) {
          msgObjToSend["linkExtracted"] = linkFilter[0];
        }
      }

      const socket = io("http://localhost:9001");
      socket.emit("chat", msgObjToSend, (response) => {
        console.log(response);
      });
      socket.on("chat", (payload) => {
        console.log("FROM SERVER: ", payload);
      });
      addMessageToQueue(msgObjToSend);
      setMessageInput("");
    }
  };

  const drawingSendBtnClickHandler = (imgDataURI) => {
    const msgObjToSend = {
      type: "DRAW",
      content: imgDataURI,
      createdAt: new Date().getTime(),
      groupId: group._id,
      userId: "62e01d89b39acc922137766c",
    };
    const socket = io("http://localhost:9001");
    socket.emit("chat", msgObjToSend, (response) => {
      console.log(response);
    });
    socket.on("chat", (payload) => {
      console.log("FROM SERVER: ", payload);
    });
    addMessageToQueue(msgObjToSend);
    setShowDrawingCanvas(false);
  };

  return (
    <>
      <div className="relative ">
        {showEmojiPanel ? (
          <div className="absolute  bottom-2 left-2">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="relative ">
        {showDrawingCanvas ? (
          <div className="absolute  bottom-2 left-2 w-full">
            <DrawingCanvasComponent
              drawingSendBtnClickHandler={drawingSendBtnClickHandler}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
        <button
          className="btn flex flex-row border-2 rounded-lg p-2 items-center justify-center mx-1 cursor-pointer hover:bg-blue-200"
          onClick={() => {
            setShowEmojiPanel(!showEmojiPanel);
            setShowDrawingCanvas(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-normal font-bold mx-1 hidden md:block ">Emoji</p>
        </button>
        <button
          onClick={() => {
            setShowDrawingCanvas(!showDrawingCanvas);
            setShowEmojiPanel(false);
          }}
          className="btn flex flex-row border-2 rounded-lg p-2 items-center justify-center mx-1 cursor-pointer hover:bg-blue-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <p className="text-normal font-bold mx-1 hidden md:block ">Draw</p>
        </button>
        <input
          type="text"
          placeholder="Message"
          className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
          name="message"
          value={messageInput}
          onChange={messageChangeHandler}
        />

        <button
          className="btn flex flex-row border-2 rounded-lg p-2 items-center justify-center mx-1 cursor-pointer hover:bg-blue-200"
          onClick={msgSendBtnClickHandler}
        >
          <p className="text-normal font-bold mx-1 hidden md:block ">Send</p>
          <svg
            className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default MessageWritePanel;
