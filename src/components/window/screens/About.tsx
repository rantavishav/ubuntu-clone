import { BITMOJI_PNG } from "@/images";
import Image from "next/image";

const About = () => {
  return (
    <div className=" px-10 py-5">
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <Image className="w-full" src={BITMOJI_PNG} alt="Ranta Logo" />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">Vishav Ranta</span> ,
        </div>
        <div className="font-normal ml-1">
          I&apos;m a{" "}
          <span className="text-pink-600 font-bold">Software Engineer!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I&apos;m a <span className=" font-medium">Graduate Student</span>{" "}
          currently pursuing Computer Science. I&apos;ve completed my 6 month
          SWE intern at{" "}
          <u className=" cursor-pointer ">
            {" "}
            <a
              href="https://en.wikipedia.org/wiki/HackerRank"
              target={"_blank"}
            >
              HackerRank
            </a>{" "}
          </u>
          , and now I&apos;m looking for summer&apos;23 internship
          opportunities! ( Hit me up{" "}
          <a className="text-underline" href="mailto:rantavishav49@gmail.com">
            <u>@rantavishav49@gmail.com</u>
          </a>{" "}
          :) )
        </li>
        <li className=" mt-3 list-building">
          {" "}
          I enjoy building awesome softwares that solve practical problems.
        </li>
        <li className=" mt-3 list-time">
          {" "}
          When I am not coding my next project, I like to spend my time reading
          books, playing minecraft or watching{" "}
          <a
            href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            tom scott&apos;s videos.
          </a>
        </li>
        <li className=" mt-3 list-star">
          {" "}
          And I also have interest in Deep Learning & Computer Vision!
        </li>
      </ul>
    </div>
  );
};

export default About;
