import React from "react";
import BackBtnIcon from "../../assets/icons/back-btn-icon.svg";
const ChatHeader = () => {
  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <button className=" mx-2" onClick={() => {}}>
        <img src={BackBtnIcon} className=" h-10 w-10 " alt="" />
      </button>
      <img
        className="object-cover w-10 h-10 rounded-full"
        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
        alt="username"
      />
      <span className="block ml-2 font-bold text-gray-600">Emma</span>
    </div>
  );
};

export default ChatHeader;
