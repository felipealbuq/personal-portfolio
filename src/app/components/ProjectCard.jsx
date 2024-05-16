import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => {
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="h-52 md:h-72 rounded-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <button type="button" onClick={openImage} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <video src={previewUrl} alt={title} className="w-5/6 max-h-screen object-contain" autoPlay controls loop />
          <button type="button" onClick={closeImage} className="h-10 w-10 absolute top-10 right-10 bg-purple-500 rounded-full p-2 hover:bg-purple-600  focus:outline-none">
            <XMarkIcon className="h-6 w-6 text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      )}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
