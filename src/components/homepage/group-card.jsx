import React from "react";
import { useNavigate } from "react-router-dom";

const getRandomTailwindColor = () => {
  const tailwindColors = ["red", "pink", "purple", "yellow", "blue", "green"];
  const randomDecimal = Math.random();
  const arrLength = tailwindColors.length;

  const randomIdx = Math.floor(randomDecimal * arrLength);
  return tailwindColors[randomIdx];
};

const GroupCard = ({ groupData, groupHandler }) => {
  const [selectedGroup, setSelectedGroup] = groupHandler;
  const navigate = useNavigate();
  const { name, _id, profilePic, description, tags } = groupData;

  const onGroupLinkClick = () => {
    setSelectedGroup(groupData);
    navigate(`/group/${_id}`);
  };

  return (
    <div
      className="w-full md:p-3 my-2 cursor-pointer select-none"
      onClick={onGroupLinkClick}
    >
      <div className="flex flex-row rounded overflow-hidden h-auto border rounded-t-xl shadow-lg">
        <img
          className="block md:h-auto md:w-32 md:ml-3 md:mx-2 w-20 h-20 m-auto flex-none bg-cover"
          src={profilePic || "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"}
        />
        <div className="bg-white rounded-xl lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="text-black font-bold text-md md:text-xl mb-2 leading-tight">
            {name || "Can life make you a bitter developer?"}
          </div>
          <p className="text-grey-darker text-xs md:text-base">
            {description ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            vero ea voluptatibus possimus eius, mollitia, ab culpa libero ex
            maxime sequi repellendus optio suscipit accusamus molestiae vel
            porro! Ullam, perferendis`}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row border-2 rounded-b-xl">
        <h5 className="text-sm md:text-base font-bold p-[2px] m-[2px] md:p-2 md:m-1 rounded-lg">
          Topics:{" "}
        </h5>
        {tags.map((tag, idx) => {
          const color = getRandomTailwindColor();
          return (
            <h5
              className={`text-sm md:text-base md:font-bold bg-${color}-800 text-white p-[3px] m-[2px] md:p-2 md:m-1 rounded-lg hover:underline hover:bg-${color}-600 hover:text-white`}
              key={idx}
            >
              #{tag}
            </h5>
          );
        })}
      </div>
    </div>
  );
};

export default GroupCard;
