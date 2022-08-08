import React from "react";
import Button from "../common/generic-button";
import EditIcon from "../../assets/icons/edit-profile.svg";

const UserCard = ({ userHandler }) => {
  const [loggedInUser, setLoggedInUser] = userHandler;
  const { email, emailVerified, displayName, isAnonymous, photoURL } =
    loggedInUser;
  return (
    <div className=" hidden md:block py-2 md:w-full md:mx-2 border-t-4 border-green-400 shadow-xl">
      {/* <Button
        className="m-1 ml-auto"
        buttonText="Edit"
        iconPositon={0}
        iconSrc={EditIcon}
        iconStyles="mr-3"
        iconWidth={5}
      /> */}
      <div className="bg-white p-3 ">
        <div className="image overflow-hidden">
          <img
            className="h-auto w-6/12 mx-auto rounded-full"
            src={
              photoURL ||
              "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
            }
            alt=""
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {displayName || "Jane Doe"}
        </h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">
          {(email && email.replace("@gmail.com", "")) || "@janedoe"}
        </h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt
        </p>
        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
            <span>Anonymous Mode</span>
            <span className="ml-auto">
              <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                Active
              </span>
            </span>
          </li>
          <li className="flex items-center py-3">
            <span>Member since</span>
            <span className="ml-auto">Nov 07, 2016</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
