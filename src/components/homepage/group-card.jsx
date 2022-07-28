import React from "react";

const GroupCard = () => {
  return (
    <div className="w-full p-3 m-2">
      <div className="flex flex-row rounded overflow-hidden h-auto border rounded-t-xl shadow-lg">
        <img
          className="block h-auto md:w-48 w-36 flex-none bg-cover"
          src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
        />
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="text-black font-bold text-xl mb-2 leading-tight">
            Can life make you a bitter developer?
          </div>
          <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero ea voluptatibus possimus eius, mollitia, ab culpa libero ex maxime sequi repellendus optio suscipit accusamus molestiae vel porro! Ullam, perferendis.\</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row border-2 rounded-b-xl">
        <h5 className="text-base font-bold p-2 m-1 rounded-lg">
          Topics:{" "}
        </h5>
       
        <h5 className="text-base font-bold bg-blue-200 p-2 m-1 rounded-lg">
          Software
        </h5>
        <h5 className="text-base font-bold bg-blue-200 p-2 m-1 rounded-lg">
          Research
        </h5>{" "}
        <h5 className="text-base font-bold bg-blue-200 p-2 m-1 rounded-lg">
          Relationships
        </h5>
      </div>
    </div>
  );
};

export default GroupCard;
