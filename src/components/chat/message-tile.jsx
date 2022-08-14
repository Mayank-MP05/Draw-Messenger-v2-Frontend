import React from "react";
import SpinnerIcon from "../../assets/icons/loading-spinner-icon.svg";
import SingleTickIcon from "../../assets/icons/single-tick-icon.svg";

const MessageTile = ({ isLoading, content, timestamp, msgData }) => {
  const msgDataLocal = msgData || {};
  return (
    <li className="flex justify-end">
      <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
        <span className="block">{content || "This is a Sample Message!!"}</span>
        <span className="absolute flex flex row right-0 text-xs bg-gray-50 p-1">
          {timestamp || "11.02 AM"}
          {isLoading ? (
            <img src={SpinnerIcon} className="animate-spin w-4 mx-1" />
          ) : (
            <img src={SingleTickIcon} className="w-4 mx-1" />
          )}
        </span>
      </div>
    </li>
  );
};

export default MessageTile;
