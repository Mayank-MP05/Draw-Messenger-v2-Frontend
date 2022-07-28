import GroupCard from "./components/homepage/group-card";
import UserCard from "./components/homepage/user-card";
import Navbar from "./components/navbar";
import "./index.scss";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row rounded-xl mt-6 mx-auto w-[80%] shadow-2xl">
        <div className="w-4/12 p-2 hidden md:block">
          {" "}
          <UserCard />
        </div>
        <div className="md:w-8/12 p-2 sm:w-full">
          <h2 className="text-lg font-bold m-2">Groups</h2>
          <GroupCard />
        </div>
      </div>
    </>
  );
};

export default App;
