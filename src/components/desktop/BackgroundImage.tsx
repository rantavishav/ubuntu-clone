import Image, { StaticImageData } from "next/image";

interface IBackgroundImageProps {
  img: string | StaticImageData;
}

const BackgroundImage = ({ img }: IBackgroundImageProps) => {
  return (
    <div className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
      <Image src={img} alt="Background Image" className="h-full object-cover" />
    </div>
  );
};

export default BackgroundImage;
