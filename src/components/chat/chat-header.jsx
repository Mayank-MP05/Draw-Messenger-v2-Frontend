import React from "react";
import { useNavigate } from "react-router-dom";
import BackBtnIcon from "../../assets/icons/back-btn-icon.svg";

const ChatHeader = ({ groupHandler }) => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = groupHandler;
  const { profilePic, name } = selectedGroup || {
    profilePic:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif",
    name: "loading...",
  };
  const changeRoute = () => {
    navigate("/");
  };
  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <button className=" mx-2" onClick={changeRoute}>
        <img src={BackBtnIcon} className=" h-10 w-10 " alt="" />
      </button>
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={
          profilePic ||
          "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
        }
        alt="username"
      />
      <span className="block ml-2 font-bold text-gray-600">
        {name || "Sample Group Title"}
      </span>
    </div>
  );
};

export default ChatHeader;
