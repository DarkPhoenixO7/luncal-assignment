"use client";
import { useState } from 'react';

export default function HeaderSection() {
  const [activeSection, setActiveSection] = useState("about");
  const handleSectionClick = (section:string) => {
    setActiveSection(section);
  };

  return (
    <div  className="h-16 w-[40vw] rounded-3xl  flex p-2 bg-[#171717] flex-col justify-center">
      <div className="flex justify-between items-center">
      <div
          className={` rounded-2xl  font-normal cursor-pointer w-32 h-12 justify-center p-2 text-center duration-500 ${
            activeSection === 'about' ? 'bg-gray-800 header-press  text-white' : 'bg-[#171717] text-[#A3ADB2] '
          }`}
          onClick={() => handleSectionClick('about')}
        >
          About me
        </div>
        <div
          className={` rounded-xl font-normal cursor-pointer w-32 h-12 p-2  text-center duration-500 ${
            activeSection === 'experience' ? 'bg-gray-800 header-press text-white' : 'bg-[#171717] text-[#A3ADB2] '
          }`}
          onClick={() => handleSectionClick('experience')}
        >
          Experience
        </div>

        <div
          className={` rounded-xl  font-normal cursor-pointer w-32 h-12 p-2 text-center duration-500 ${
            activeSection === 'recommended' ? 'bg-gray-800 header-press text-white' : 'bg-[#171717] text-[#A3ADB2] '
          }`}
          onClick={() => handleSectionClick('recommended')}
        >
          Recommended
        </div>
      </div>
    </div>
  );
}