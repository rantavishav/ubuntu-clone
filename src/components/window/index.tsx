import { useState } from "react";

import MainWindow from "./MainWindow";
import WindowEditButtons from "./WindowEditButtons";

interface IWindowProps {
  isWindowOpen: boolean;
  closeWindow: () => void;
}

const Window = ({ isWindowOpen, closeWindow }: IWindowProps) => {
  const [isWindowMaximized, setIsWindowMaximized] = useState(false);

  const handleWindowMaximize = () => setIsWindowMaximized(!isWindowMaximized);
  if (!isWindowOpen) return null;
  return (
    <div className=" absolute flex justify-center items-center transform  left-0 h-screen w-screen z-20">
      <div
        className={`notFocused opened-window overflow-hidden w-2/3 main-window window-shadow border-black border-opacity-40 border border-t-0 flex flex-col ${
          isWindowOpen ? "" : "hidden"
        } ${
          isWindowMaximized
            ? " duration-300 rounded-none w-full h-full -translate-x-px -translate-y-px"
            : " rounded-lg rounded-b-none"
        }`}
      >
        {/* Top bar */}
        <div
          className={
            " relative bg-ub-window-title border-t-2 border-white border-opacity-5 py-1.5 px-3 text-white w-full select-none rounded-b-none flex justify-center items-center"
          }
        >
          <div className=" text-sm font-bold w-2/3 text-center">Ranta</div>
          {/* <div className="text-right">
            
          </div> */}
        </div>

        <WindowEditButtons
          handleClose={closeWindow}
          handleMaximize={handleWindowMaximize}
          isMaximized={isWindowMaximized}
        />

        <MainWindow isWindowMaximized={isWindowMaximized} />
      </div>
    </div>
  );
};

export default Window;
