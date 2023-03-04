import {
  WINDOW_CLOSE_SYMBOLIC_SVG,
  WINDOW_MAXIMIZE_SYMBOLIC_SVG,
  WINDOW_MINIMIZE_SYMBOLIC_SVG,
  WINDOW_RESTORE_SYMBOLIC_SVG,
} from "@/images";
import Image from "next/image";

interface IWindowEditButtonsProps {
  isMaximized: boolean;
  handleClose: () => void;
  handleMaximize: () => void;
}

const WindowEditButtons = ({
  isMaximized,
  handleClose,
  handleMaximize,
}: IWindowEditButtonsProps) => {
  return (
    <div className="absolute select-none right-0 top-0 mt-1 mr-1 flex justify-center items-center">
      <span
        className="mx-1.5 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
        onClick={handleClose}
      >
        <Image
          src={WINDOW_MINIMIZE_SYMBOLIC_SVG}
          alt="ubuntu window minimize"
          className="h-5 w-5 inline"
        />
      </span>
      {isMaximized ? (
        <span
          className="mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
          onClick={handleMaximize}
        >
          <Image
            src={WINDOW_RESTORE_SYMBOLIC_SVG}
            alt="ubuntu window restore"
            className="h-5 w-5 inline"
          />
        </span>
      ) : (
        <span
          className="mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
          onClick={handleMaximize}
        >
          <Image
            src={WINDOW_MAXIMIZE_SYMBOLIC_SVG}
            alt="ubuntu window maximize"
            className="h-5 w-5 inline"
          />
        </span>
      )}
      <button
        className="mx-1.5 focus:outline-none cursor-default bg-ub-orange bg-opacity-90 hover:bg-opacity-100 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
        onClick={handleClose}
      >
        <Image
          src={WINDOW_CLOSE_SYMBOLIC_SVG}
          alt="ubuntu window close"
          className="h-5 w-5 inline"
        />
      </button>
    </div>
  );
};

export default WindowEditButtons;
