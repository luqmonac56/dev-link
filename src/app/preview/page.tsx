import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/../public/images/profile-image.jpeg";
import github from "@/../public/images/github.png";
import arrowright from "@/../public/images/arrowright.png";

const page = () => {
  return (
    <div>
      <div className="md:bg-[#633CFF] rounded-b-[32px]  md:h-[350px] md:pt-8 pt-4">
        <nav className="flex justify-between items-center rounded-xl bg-white p-4  w-[90%] mx-auto my-0">
          <Link href="/" className="rounded-[8px] border-purple text-[#633CFF]">
            Back to Editor
          </Link>
          <button className="rounded-[8px] border-purple text-white bg-[#633CFF]">
            Share Link
          </button>
        </nav>
      </div>
      <div className="bg-white w-[350px] md:-mt-12 lg:-mt-16 mx-auto rounded-3xl shadow-md py-12 px-14">
        <div className="">
          <Image
            className="rounded-[50%] m-auto w-24 profile-picture h-24"
            src={profileImage}
            alt="profileImage"
          />
        </div>
        <h1 className="text-center mt-5 mb-3 font-bold text-[#333333] text-[32px] ">
          Ben Wright
        </h1>
        <p className="text-center text-[#888888]">ben@example.com</p>
        <div className="mt-5">
          <button className="bg-black rounded-[8px] flex items-center justify-between py-3 px-6 w-full text-white mb-4">
            <span className="flex items-center gap-2 ">
              <Image className="" src={github} alt="github" />
              Github
            </span>
            <Image className="" src={arrowright} alt="arrowright" />
          </button>
          <button className="bg-[#EE3939] rounded-[8px] flex items-center justify-between py-3 px-6 w-full text-white">
            <span className="flex items-center gap-2 ">
              <Image className="" src={github} alt="github" />
              Github
            </span>
            <Image className="" src={arrowright} alt="arrowright" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
