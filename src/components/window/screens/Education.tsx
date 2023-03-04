const Education = () => {
  return (
    <div className=" px-10 py-5">
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Pandit Deendayal Energy University- PDEU
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2018 - 2022</div>
          <div className=" text-sm md:text-base">Computer Engineering</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            CGPA &nbsp; 9.35/10
          </div>
        </li>
        <li className="list-disc mt-5">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Class 12<sup>th</sup> (GSEB)
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
          <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Percentile Rank &nbsp; 94.1%
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
