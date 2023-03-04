import { useState } from "react";
import About from "./screens/About";
import Education from "./screens/Education";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import Skills from "./screens/Skills";

import WindowLeftSideBar from "./WindowLeftSideBar";

const screens: {
  [key: string]: JSX.Element;
} = {
  about: <About />,
  education: <Education />,
  skills: <Skills />,
  projects: <Projects />,
  resume: <Resume />,
};

interface IMainWindowProps {
  isWindowMaximized: boolean;
}

const MainWindow = ({ isWindowMaximized }: IMainWindowProps) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const showNavBar = () => setIsNavBarVisible(!isNavBarVisible);

  return (
    <div
      className={`w-full h-${
        isWindowMaximized ? "full" : "[560px]"
      } flex bg-ub-cool-grey text-white select-none relative`}
    >
      <div className="md:flex hidden flex-col w-1/2 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black ">
        <WindowLeftSideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div
        onClick={showNavBar}
        className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
      >
        <div className=" w-3.5 border-t border-white"></div>
        <div
          className=" w-3.5 border-t border-white"
          style={{ marginTop: "2pt", marginBottom: "2pt" }}
        ></div>
        <div className=" w-3.5 border-t border-white"></div>
        <div
          className={
            (isNavBarVisible ? " visible animateShow z-30 " : " invisible ") +
            " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-lg top-full mt-1 left-0 shadow border-black border border-opacity-20"
          }
        >
          <WindowLeftSideBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
        {screens[activeTab]}
      </div>
    </div>
  );
};

export default MainWindow;
