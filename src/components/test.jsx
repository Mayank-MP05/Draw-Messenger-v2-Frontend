import React from "react";

const TestComp = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Jane Doe
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              Owner at Her Company Inc.
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
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
          <div className="my-4"></div>
          <div className="bg-white p-3 hover:shadow">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Similar Profiles</span>
            </div>
            <div className="grid grid-cols-3">
              <div className="text-center my-2">
                <img
                  className="h-16 w-16 rounded-full mx-auto"
                  src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                  alt=""
                />
                <a href="#" className="text-main-color">
                  Kojstantin
                </a>
              </div>
              <div className="text-center my-2">
                <img
                  className="h-16 w-16 rounded-full mx-auto"
                  src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                  alt=""
                />
                <a href="#" className="text-main-color">
                  James
                </a>
              </div>
              <div className="text-center my-2">
                <img
                  className="h-16 w-16 rounded-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
                <a href="#" className="text-main-color">
                  Natie
                </a>
              </div>
              <div className="text-center my-2">
                <img
                  className="h-16 w-16 rounded-full mx-auto"
                  src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                  alt=""
                />
                <a href="#" className="text-main-color">
                  Casey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl border rounded">
        <div>
          <div className="w-full">
            <div className="relative flex items-center p-3 border-b border-gray-300">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                alt="username"
              />
              <span className="block ml-2 font-bold text-gray-600">Emma</span>
              <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
            </div>
            <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
              <ul className="space-y-2">
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">Hi</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">Hiiii</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">how are you?</span>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message"
                required
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
              <button type="submit">
                <svg
                  className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComp;
