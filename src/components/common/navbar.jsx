import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DrawMessengerLogo from "../../assets/draw-logo-192.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import LoaderIcon from "../../assets/icons/loading-spinner-icon.svg";
import { signOut } from "firebase/auth";
import APIClient from "../../api/common";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Navbar = ({ userHandler, isLoggedInHandler }) => {
  const [loggedInUser, setLoggedInUser] = userHandler;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInHandler;
  const [loginBtnLoader, setloginBtnLoader] = useState(false);

  const loginBtnClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        loginUserToMongoDB(user);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const logoutBtnClick = () => {
    signOut(auth)
      .then(() => {
        setLoggedInUser({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setloginBtnLoader(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User: ", user);
        loginUserToMongoDB(user);
      } else {
        setLoggedInUser({});
        setIsLoggedIn(false);
        setloginBtnLoader(false);
      }
    });
  }, []);

  const loginUserToMongoDB = (user) => {
    const {
      displayName,
      email,
      emailVerified,
      metadata,
      phoneNumber,
      photoURL,
    } = user;
    const { createdAt, creationTime, lastLoginAt, lastSignInTime } = metadata;
    APIClient({
      route: "/user/auth",
      payload: {
        email,
        fullname: displayName,
        emailVerified,
        createdAt,
        lastLoginAt,
        phoneNumber,
        photoURL,
      },
      method: "POST",
      successFn: (res) => {
        if (res.result) {
          console.log("res.results", res.result);
          setLoggedInUser(res.result);
          setIsLoggedIn(true);
        }
      },
      errorFn: (err) => {
        setLoggedInUser({});
        setIsLoggedIn(false);
      },
      finallyFn: () => {
        setloginBtnLoader(false);
      },
    });
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={DrawMessengerLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Draw Messenger Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Draw Messenger
          </span>
        </Link>
        <div className="ml-auto">
          {!isLoggedIn ? (
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              onClick={loginBtnClick}
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              <p className="hidden md:block">Sign in with Google</p>
              {loginBtnLoader ? (
                <img
                  src={LoaderIcon}
                  className="animate-spin ml-2 mr-1 w-6 h-6"
                  alt=""
                />
              ) : (
                ""
              )}
            </button>
          ) : (
            <div className="flex flex-row">
              {/* <img src={} /> */}
              <button
                className="inline-flex items-center h-10 px-5 text-red-800 transition-colors duration-150 bg-red-100 rounded-lg focus:shadow-outline hover:bg-red-200"
                onClick={logoutBtnClick}
              >
                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 25 25">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
