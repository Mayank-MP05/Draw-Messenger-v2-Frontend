import React from "react";
import SpinnerIcon from "../../assets/icons/loading-spinner-icon.svg";
import SingleTickIcon from "../../assets/icons/single-tick-icon.svg";

const MessageTile = ({ isLoading, content, timestamp, msgData }) => {
  const msgDataLocal = msgData || {
    type: "TEXT",
    createdAt: new Date().getTime(),
    createdBy: "wghfbsjfddfsf",
    groupId: "sdfkjsfhksd",
    content: "msg from local",
    title: "",
    description: "",
    imgUrl: "",
  };
  const {
    type,
    createdAt,
    createdBy,
    groupId,
    content: contentLocal,
    title,
    description,
    imgUrl,
  } = msgDataLocal;
  return (
    <li className="flex justify-end">
      <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
        {type === "TEXT" ? (
          <span className="block">
            {contentLocal || "This is a Sample Message!!"}
          </span>
        ) : (
          ""
        )}
        {type === "DRAWING" ? (
          <span className="block">
            <img
              className="w-48"
              src={
                content ||
                "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              alt="drawing"
            />
          </span>
        ) : (
          ""
        )}
        {type === "LINK" ? (
          <span className="flex">
            <div className="flex">
              <img
                className="w-16 h-16"
                src={
                  imgUrl ||
                  "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                }
                alt="drawing"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold px-2">
                {title || "Sample Link Title"}
              </h2>
              <p className="text-sm font-normal px-2 py-1">
                {description || "Sample Link Description"}
              </p>
            </div>
          </span>
        ) : (
          ""
        )}
        <span className="absolute flex flex row right-0 text-xs bg-gray-50 p-1">
          {timestamp || "11.02 AM"}
          {isLoading ? (
            <img src={SpinnerIcon} className="animate-spin w-4 mx-1" />
          ) : (
            <img src={SingleTickIcon} className="w-4 mx-1" />
          )}
        </span>{" "}
      </div>
    </li>
  );
};

export default MessageTile;
