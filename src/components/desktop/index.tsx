import { FOLDER_PNG } from "@/images";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Folder from "../folder";
import Window from "../window";
import BackgroundImage from "./BackgroundImage";

interface IDesktopProps {
  bgImage: string | StaticImageData;
  changeBackgroundImage: (imgName: string) => void;
}

const Desktop = ({ bgImage, changeBackgroundImage }: IDesktopProps) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleFolderOpen = () => {
    setIsWindowOpen(true);
  };
  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div
      className={
        " h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse pt-8 bg-transparent relative overflow-hidden overscroll-none window-parent"
      }
    >
      {/* Background Image */}
      <BackgroundImage img={bgImage} />

      {/* Folders  */}
      <Folder title="Ranta" image={FOLDER_PNG} onOpenClick={handleFolderOpen} />

      {/* window */}
      <Window isWindowOpen={isWindowOpen} closeWindow={closeWindow} />
    </div>
  );
};

export default Desktop;
