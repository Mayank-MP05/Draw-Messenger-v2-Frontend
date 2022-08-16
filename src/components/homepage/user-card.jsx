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
              photoURL ||
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
        <textarea className="w-full h-24 text-sm text-gray-500 hover:text-gray-600 border-2 border-gray-200 rounded-xl p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt
        </textarea>
        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-1 px-2 mt-1 divide-y rounded shadow-sm">
          <li className="flex items-center py-1">
            <span>Anonymous Mode</span>
            <span className="ml-auto">
              <span className="bg-green-500 py-1 px-1 rounded text-white text-sm">
                Active
              </span>
              <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mx-2">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              {/* <span className="bg-red-500 py-1 px-1 rounded text-white text-sm">
                Inctive
              </span> */}
            </span>
          </li>
          <li className="flex items-center py-1">
            <span>Member since</span>
            <span className="ml-auto">Nov 07, 2016</span>
          </li>
          <li className="flex items-center py-1">
            <button className="bg-green-500 m-auto p-2 my-1 rounded text-white text-sm">
              Update Profile
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
