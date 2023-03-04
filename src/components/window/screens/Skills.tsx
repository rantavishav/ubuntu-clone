import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I&apos;ve worked with a wide variety of programming languages &
          frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              front-end development, React.js & javascript!
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <Image
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              width={91}
              height={20}
              alt="ranta javascript"
            />
            <Image
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              width={91}
              height={20}
              alt="ranta c++"
            />
            <Image
              className="m-1"
              src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              width={91}
              height={20}
              alt="ranta python"
            />
            <Image
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              width={91}
              height={20}
              alt="ranta dart"
            />
            <Link
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                title="yes it's a language!"
                className="m-1"
                src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                width={91}
                height={20}
                alt="ranta HTML"
              />
            </Link>
            <Image
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff"
              width={91}
              height={20}
              alt="ranta SASS"
              className="m-1"
            />
            <Image
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              width={91}
              height={20}
              alt="ranta git"
              className="m-1"
            />
            <Image
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              width={91}
              height={20}
              alt="ranta firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <Image
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              width={91}
              height={20}
              alt="ranta next"
            />
            <Image
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              width={91}
              height={20}
              alt="ranta react"
            />
            <Image
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              width={91}
              height={20}
              alt="ranta flutter"
            />
            <Image
              className="m-1"
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              width={91}
              height={20}
              alt="ranta tailwind css"
            />
            <Image
              src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff"
              width={91}
              height={20}
              alt="ranta node.js"
              className="m-1"
            />
            <Image
              src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              width={91}
              height={20}
              alt="ranta jquery"
              className="m-1"
            />
            <Image
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              width={91}
              height={20}
              alt="ranta redux"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span>{" "}
          <Image
            className=" inline ml-1"
            src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
            width={91}
            height={20}
            alt="ranta linux"
          />{" "}
          <span>!</span>
        </li>
      </ul>
    </>
  );
};

export default Skills;
