import Image, { StaticImageData } from "next/image";

interface IFolderProps {
  image: string | StaticImageData;
  onOpenClick: () => void;
  title: string;
}

const Folder = ({ image, onOpenClick, title }: IFolderProps) => {
  return (
    <div
      className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white "
      onDoubleClick={onOpenClick}
      tabIndex={0}
    >
      <Image
        width={40}
        height={40}
        className="mb-1 w-10"
        src={image}
        alt="Folder"
      />
      {title}
    </div>
  );
};

export default Folder;
