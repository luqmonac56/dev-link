import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo.png";
import mobileLogo from "@/../public/images/mobile-logo.png";
import link from "@/../public/images/link.png";
import profile from "@/../public/images/profile.png";
import getstarted from "@/../public/images/getstarted.png";

interface NavbarProps {
  onHandleDisplayLinks: () => void;
  onHandleDisplayprofile: () => void;
  bgColor1: string;
  bgColor2: string;
}

const Navbar = (props: NavbarProps) => {
  const { onHandleDisplayLinks, onHandleDisplayprofile, bgColor1, bgColor2 } = props;

  return (
    <nav className="flex justify-between px-8 py-4  items-center w-full mb-4 mx-auto md:w-[90%] rounded    max-w-[1390px] bg-white font-semibold">
      <Link href="/main">
        <div>
          <Image className="md:hidden block" src={mobileLogo} alt="logo" />
          <Image className="md:block hidden" src={logo} alt="logo" />
        </div>
      </Link>
      <div className="flex  items-center gap-8">
        <button
          style={{ background: bgColor1 }}
          onClick={onHandleDisplayLinks}
          className="flex px-7 py-3 rounded-[8px] justify-center items-center gap-2"
        >
          <Image src={link} alt="logo" />
          <span className="md:block hidden">Links</span>
        </button>
        <button
          style={{ background: bgColor2 }}
          onClick={onHandleDisplayprofile}
          className="flex justify-center px-7 py-3 rounded-[8px] items-center gap-2"
        >
          <Image src={profile} alt="logo" />
          <span className="md:block hidden">Profile Details</span>
        </button>
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
