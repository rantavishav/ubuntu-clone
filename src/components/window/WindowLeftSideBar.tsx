import { useState } from "react";

import {
  ABOUT_SVG,
  DOWNLOAD_SVG,
  EDUCATION_SVG,
  PROJECTS_SVG,
  SKILLS_SVG,
} from "@/images";
import Image from "next/image";

interface IWindowLeftSideBarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const WindowLeftSideBar = ({
  activeTab,
  setActiveTab,
}: IWindowLeftSideBarProps) => {
  const handleChangeTab = (e: React.FocusEvent<HTMLDivElement>) =>
    setActiveTab(e.currentTarget.id);

  return (
    <div className="p-5">
      <div
        id="about"
        tabIndex={0}
        onFocus={handleChangeTab}
        className={
          (activeTab === "about"
            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
          " w-28 md:w-full rounded-lg cursor-default outline-none py-3  focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
        }
      >
        <Image
          width={16}
          height={16}
          className="md:w-4"
          alt="about Ranta"
          src={ABOUT_SVG}
        />
        <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
      </div>
      <div
        id="education"
        tabIndex={0}
        onFocus={handleChangeTab}
        className={
          (activeTab === "education"
            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
          " w-28 md:w-full rounded-lg cursor-default outline-none py-3  focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
        }
      >
        <Image
          width={16}
          height={16}
          src={EDUCATION_SVG}
          className="md:w-4"
          alt="Ranta's education"
        />
        <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
      </div>
      <div
        id="skills"
        tabIndex={0}
        onFocus={handleChangeTab}
        className={
          (activeTab === "skills"
            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
          " w-28 md:w-full rounded-lg cursor-default outline-none py-3  focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
        }
      >
        <Image
          width={16}
          height={16}
          className="md:w-4"
          alt="ranta' skills"
          src={SKILLS_SVG}
        />
        <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
      </div>
      <div
        id="projects"
        tabIndex={0}
        onFocus={handleChangeTab}
        className={
          (activeTab === "projects"
            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
          " w-28 md:w-full rounded-lg cursor-default outline-none py-3  focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
        }
      >
        <Image className="md:w-4" alt="ranta' projects" src={PROJECTS_SVG} />
        <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
      </div>
      <div
        id="resume"
        tabIndex={0}
        onFocus={handleChangeTab}
        className={
          (activeTab === "resume"
            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
          " w-28 md:w-full rounded-lg cursor-default outline-none py-3  focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
        }
      >
        <Image className="md:w-4" alt="ranta's resume" src={DOWNLOAD_SVG} />
        <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
      </div>
    </div>
  );
};

export default WindowLeftSideBar;
