import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo.png";
import mobileLogo from "@/../public/images/mobile-logo.png";
import link from "@/../public/images/link.png";
import profile from "@/../public/images/profile.png";
import getstarted from "@/../public/images/getstarted.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-4  items-center w-full mb-4 mx-auto md:w-[90%] rounded    max-w-[1390px] bg-white font-semibold">
      <Link href="/main">
        <div>
          <Image className="md:hidden block" src={mobileLogo} alt="logo" />
          <Image className="md:block hidden" src={logo} alt="logo" />
        </div>
      </Link>
      <div className="flex  items-center gap-8">
        <Link href="/links">
          <button className="flex justify-center items-center gap-2">
            <Image src={link} alt="logo" />
            <span className="md:block hidden">Links</span>
          </button>
        </Link>
        <Link href="/">
          <button className="flex justify-center items-center gap-2">
            <Image src={profile} alt="logo" />
            <span className="md:block hidden">Profile Details</span>
          </button>
        </Link>
      </div>
      <Link href="/preview">
        <button className="border-purple ">
          <Image className="md:hidden block" src={mobileLogo} alt="logo" />
          <p className="md:block hidden">Preview</p>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
