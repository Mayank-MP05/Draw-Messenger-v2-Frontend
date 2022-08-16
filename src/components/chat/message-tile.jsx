import React from "react";
import SpinnerIcon from "../../assets/icons/loading-spinner-icon.svg";
import SingleTickIcon from "../../assets/icons/single-tick-icon.svg";

const MessageTile = ({ isLoading, msgData, user }) => {
  const msgDataLocal = msgData || {
    type: "TEXT",
    createdAt: new Date().getTime(),
    createdBy: "wghfbsjfddfsf",
    groupId: "sdfkjsfhksd",
    userId: "",
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
    content,
    title,
    description,
    imgUrl,
  } = msgDataLocal;
  return (
    <li
      className={`flex ${
        (user && user._id) === msgDataLocal.userId
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
        {type === "TEXT" ? (
          <span className="block">
            {content || "This is a Sample Message!!"}
          </span>
        ) : (
          ""
        )}
        {type === "DRAW" ? (
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
            <div className="flex min-w-[80px] justify-center items-center">
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
                {(title && title.slice(0, 25) + "...") || "Sample Link Title"}
              </h2>
              <p className="text-sm font-normal px-2 py-1">
                {(description && description.slice(0, 75) + "...") ||
                  "Sample Link Description"}
              </p>
            </div>
          </span>
        ) : (
          ""
        )}
        <span className="absolute flex flex row right-0 text-xs bg-gray-50 p-1">
          {new Date(createdAt).toLocaleTimeString().slice(0, 5) ||
            "Dummy 11.02 AM"}
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
