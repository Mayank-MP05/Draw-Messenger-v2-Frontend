import React, { useState } from "react";
import Button from "../common/generic-button";
import EditIcon from "../../assets/icons/edit-profile.svg";
import APIClient from "../../api/common";

const UserCard = ({ userHandler }) => {
  const [loggedInUser, setLoggedInUser] = userHandler;
  const {
    email,
    emailVerified,
    displayName,
    isAnonymous,
    profilePic,
    createdAt,
    aboutMe: aboutMeFromParents,
  } = loggedInUser;

  const [aboutMe, setAboutMe] = useState(aboutMeFromParents);
  const [isAnonymousMode, setIsAnonymousMode] = useState(isAnonymous);

  // User update logic
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);

  const onUpdateBtnClick = () => {
    const { email } = loggedInUser;

    APIClient({
      route: "/user/auth",
      payload: {
        email,
        aboutMe,
        isAnonymous: isAnonymousMode,
      },
      method: "POST",
      successFn: (res) => {
        if (res.result) {
          console.log("res.results", res.result);
          setLoggedInUser(res.result);
        }
      },
      errorFn: (err) => {
        console.log(err);
      },
      finallyFn: () => {
        // setloginBtnLoader(false);
      },
    });
  };

  return (
    <div className=" hidden md:block py-2 md:w-full md:mx-2 border-t-4 border-green-400 shadow-xl">
      {/* <Button
        className="my-0 mr-2 ml-auto"
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
              profilePic ||
              "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
            }
            alt=""
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {displayName || "Jane Doe"}
        </h1>
        <span className="text-gray-600 font-lg text-bold underline p-2 bg-green-100 rounded-xl -mt-2 -ml-1">
          {email ? `@` + email.replace("@gmail.com", "") : "@janedoe"}
        </span>
        <h1 className="text-gray-900 font-bold text-md leading-8 my-1">
          About me
        </h1>
        <textarea
          onChange={(e) => {
            setAboutMe(e.target.value.trim());
            setUpdateButtonDisabled(false);
          }}
          className="w-full h-24 text-sm text-gray-500 hover:text-gray-600 border-2 border-gray-200 rounded-xl p-2"
        >
          {aboutMe ||
            `[LOCAL] Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolor sequ illum qui unde aspernatur non deserunt`}
        </textarea>
        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-1 px-2 mt-1 divide-y rounded shadow-sm">
          <li className="flex items-center py-1">
            <span>Anonymous Mode</span>
            <span className="ml-auto">
              {isAnonymousMode ? (
                <span className="bg-green-700 py-1 px-1 rounded text-white text-sm">
                  Active
                </span>
              ) : (
                <span className="bg-red-700 py-1 px-1 rounded text-white text-sm">
                  Inctive
                </span>
              )}
              <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mx-2">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={isAnonymousMode}
                  onChange={(e) => {
                    setIsAnonymousMode(e.target.checked);
                    setUpdateButtonDisabled(false);
                  }}
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </span>
          </li>
          <li className="flex items-center py-1">
            <span>Member since</span>
            <span className="ml-auto">
              {new Date(createdAt).toLocaleDateString() || `Nov 07, 2016`}
            </span>
          </li>
          <li className="flex items-center py-1">
            <button
              onClick={onUpdateBtnClick}
              disabled={updateButtonDisabled}
              className="bg-green-700 m-auto p-2 my-1 rounded text-white text-sm disabled:bg-green-400"
            >
              Update Profile
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
