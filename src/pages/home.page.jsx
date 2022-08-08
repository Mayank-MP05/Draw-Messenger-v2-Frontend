import React, { useEffect, useState } from "react";
import UserCard from "../components/homepage/user-card";
import Navbar from "../components/common/navbar";
import GroupCard from "../components/homepage/group-card";
import GroupIcon from "../assets/icons/group-icon.svg";
import APIClient from "../api/common";
const HomePage = ({ userHandler, groupHandler }) => {
  const [groupsList, setgroupsList] = useState([]);

  useEffect(() => {
    APIClient({
      route: "/group",
      payload: {},
      method: "GET",
      successFn: (res) => {
        setgroupsList(res.groups);
      },
      errorFn: (err) => {
        console.log(err);
      },
    });
  }, []);
  return (
    <>
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[95%] md:w-[80%] shadow-2xl">
        <div className="w-4/12 p-2 hidden md:block">
          {" "}
          <UserCard userHandler={userHandler} />
        </div>
        <div className="md:w-8/12 p-2 sm:w-full">
          <div className="flex flex-row">
            <img className="w-12 h-12 px-2" src={GroupIcon} alt="Group Logo" />
            <h2 className="text-xl font-bold my-2 mr-0 ">Groups</h2>
          </div>
          <div className="w-full h-full overflow-hidden ">
            {groupsList.map((singleGrpObj, idx) => (
              <GroupCard
                key={idx}
                groupData={singleGrpObj}
                groupHandler={groupHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
