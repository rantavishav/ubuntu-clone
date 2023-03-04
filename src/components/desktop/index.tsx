import { FOLDER_PNG } from "@/images";
import { StaticImageData } from "next/image";
import Folder from "../folder";
import BackgroundImage from "./BackgroundImage";

interface IDesktopProps {
  bgImage: string | StaticImageData;
  changeBackgroundImage: (imgName: string) => void;
}

const Desktop = ({ bgImage, changeBackgroundImage }: IDesktopProps) => {
  const handleFolderOpen = () => {
    console.log("Folder Open");
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
    </div>
  );
};

export default Desktop;
