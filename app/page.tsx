"use client";
import Image from "next/image";
import question from "../public/QuestionMark.png";
import SquareGrid from "@/components/square-grid";
import HeaderSection from "@/components/header-section";
import back from '../public/back.png';
import forwward from '../public/forward.png';
import { useState } from "react";
import tree from '../public/tree.jpg'
import mountain from '../public/mountain.jpg'
import lake from '../public/lake.jpg'

export default function Home() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };
  const triggerFileInput = () => {
    document.getElementById('image').click();
  };

  return (
    <div className="flex w-full h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] gap-x-6 py-14 pr-16 pl-8">
      <div className="bg-[#616161D1] rounded-2xl border-[#96BEE7] border-[2px] w-full h-full "></div>
      <div className="flex flex-col w-full h-full gap-y-6 ">
        <div
          style={{ boxShadow: "1px 6px 15px 1px #000000" }}
          className="bg-[#363C43] rounded-2xl shadow-xl flex gap-x-4 flex-col w-full mx-4 p-4"
        >
          <div className="flex flex-row gap-x-8 pb-4 ">
            <div className="flex flex-col justify-between w-5 h-[150px]">
              <Image height={20} width={20} src={question} alt="Question" />
              <SquareGrid />
            </div>
            <div className="flex flex-col w-[38vw]">
              <HeaderSection />
              <p className="text-[#969696] p-4 text-lg">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <p className="px-4 text-[#969696] text-lg">
                {" "}
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#888989] to-[#4A4E54] p-1 rounded h-16 self-center"></div>
          </div>
          
        </div>
        <div style={{boxShadow:"0 2px 2px 0 #000000 "}} className="bg-gradient-to-r from-[#2828281A] to-[#F8F8F81A] mx-auto rounded-xl h-1 w-[35vw]"></div>
        <div style={{ boxShadow: "8px 8px 8px #000000" }}
          className="bg-[#363C43] rounded-2xl shadow-xl flex gap-x-4 flex-row w-full mx-4 p-4">
            <div className="flex flex-col justify-between w-5 h-[150px]">
              <Image height={20} width={20} src={question} alt="Question" />
              <SquareGrid />
            </div>
            <div className="flex flex-col gap-y-8 p-4 m-2">
              <div className="flex justify-between w-[40vw]">
              <div className="flex bg-[#171717] h-14 w-32 text-white rounded-3xl text-center items-center justify-center ">
                Gallery

              </div>
              <div className="flex gap-x-6">
                 <button onClick={triggerFileInput} style={{boxShadow:" -0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25),9px 10px 7.1px rgba(0, 0, 0, 0.4),inset 0px 0px 48.9064px rgba(255, 255, 255, 0.05),inset 0px 3.26043px 3.26043px rgba(255, 255, 255, 0.15) "}}  className=" rounded-full w-32 h-14 font-semibold text-white ">
                      + ADD IMAGE
                      <input accept="image/*" className="hidden" id="image" type="file" onChange={handleImageChange}/>
                 </button>
                 <div className="flex justify-center h-16 items-center gap-x-6">
                     <div style={{boxShadow:"10px 10px 55px 15px #101213, -2px -2px 30px #96BEE7"}} className="bg-gradient-to-b from-[#303439] to-[#161718] h-8 w-8 rounded-full  p-2">
                       <Image src={back} alt="Back" height={20} width={20} />
                     </div>
                     <div style={{boxShadow:"10px 10px 55px 15px #101213, -2px -2px 30px #96BEE7"}} className="bg-gradient-to-b from-[#303439] to-[#161718] h-8 w-8 rounded-full  p-2">
                       <Image src={forwward} alt="Back" height={20} width={20} />
                     </div>
                 </div>

              </div>
              </div>
              
                {images.length > 0 ?(
                  <div className="grid grid-cols-3 rounded-3xl gap-4 h-[22vh] overflow-auto hide-scrollbar">
                    {images.map((image, id)=>(
                      <div key={id} className="grayscale hover:grayscale-0">
                        <Image className="rounded-3xl h-48 w-48 object-cover" src={image} alt="Image" height={100} width={100} />

                      </div>
                    ))}
                  </div>

                ):(
                  <div className="grid grid-cols-3 h-[22vh] gap-4">
                    <div className=" grayscale hover:grayscale-0">
                      <Image className="rounded-3xl h-48 w-48 object-cover" src={tree} alt="tree" height={200} width={200} />
                    </div>
                    <div className=" grayscale hover:grayscale-0">
                      <Image className="rounded-3xl h-48 w-48 object-cover" src={mountain} alt="tree" height={200} width={200} />
                    </div>
                    <div className=" grayscale hover:grayscale-0">
                      <Image className="rounded-3xl h-48 w-48 object-cover" src={lake} alt="tree" height={200} width={200} />
                    </div>


                  </div>

                )}

              

            </div>

        </div>
        <div style={{boxShadow:"0 2px 2px 0 #000000 "}} className="bg-gradient-to-r from-[#2828281A] to-[#F8F8F81A] mx-auto rounded-xl h-1 w-[35vw]"></div>
      </div>
    </div>
  );
}
