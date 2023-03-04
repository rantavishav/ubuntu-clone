import Image from "next/image";
import Link from "next/link";
import {
  COF_ORANGE_HEX_SVG,
  POWER_BUTTON_SVG,
  PROCESS_WORKING_SYMBOLIC_SVG,
  UBUNTU_WHITE_HEX_SVG,
} from "@/images";

interface IBootingScreenProps {
  isVisible: boolean;
  isShutDown: boolean;
  turnOn: () => void;
}
const BootingScreen = ({
  isVisible,
  isShutDown,
  turnOn,
}: IBootingScreenProps) => {
  return (
    <div
      style={isVisible ? { zIndex: "100" } : { zIndex: "-20" }}
      className={
        (isVisible ? " visible opacity-100" : " invisible opacity-0 ") +
        " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"
      }
    >
      <Image
        width={400}
        height={400}
        className="md:w-1/4 w-1/2"
        src={COF_ORANGE_HEX_SVG}
        alt="Ubuntu Logo"
      />
      <div
        className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer"
        onClick={turnOn}
      >
        {isShutDown ? (
          <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300">
            <Image
              width={32}
              height={32}
              className="w-8"
              src={POWER_BUTTON_SVG}
              alt="Power Button"
            />
          </div>
        ) : (
          <Image
            width={40}
            height={40}
            className={" w-10 " + (isVisible ? " animate-spin " : "")}
            src={PROCESS_WORKING_SYMBOLIC_SVG}
            alt="Ubuntu Process Symbol"
          />
        )}
      </div>
      <Image
        width={200}
        height={100}
        className="md:w-1/5 w-1/2"
        src={UBUNTU_WHITE_HEX_SVG}
        alt="Ubuntu Name"
      />
      <div className="text-white mb-4">
        <Link
          className="underline"
          href="https://www.linkedin.com/in/vishav-ranta-964964194/"
          rel="noreferrer noopener"
          target="_blank"
        >
          linkedin
        </Link>
        <span className="font-bold mx-1">|</span>
        <Link
          href="https://github.com/rantavishav"
          rel="noreferrer noopener"
          target="_blank"
          className="underline"
        >
          github
        </Link>
      </div>
    </div>
  );
};

export default BootingScreen;
