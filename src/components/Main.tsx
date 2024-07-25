import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import React from "react";
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";

type ActiveComponent = "one" | "two";

const Main = () => {
  const [activeComponent, setActiveComponent] = useState("one");
  const [bgColor1, setBgColor1] = useState<string>("#EFEBFF");
  const [bgColor2, setBgColor2] = useState<string>("white");

  const handleDisplayLinks = () => {
    setActiveComponent("one");
    console.log(activeComponent);
    if (activeComponent === "one") {
      setBgColor1("#EFEBFF");
    } else {
      setBgColor1("white");
    }

  };
  const handleDisplayprofile = () => {
    setActiveComponent("two");
    console.log(activeComponent);
    if (activeComponent === "two") {
      setBgColor2("#EFEBFF");
    } else {
      setBgColor2("white");
    }
  };

  return (
    <div className="bg-[#FAFAFA] pt-4">
      <Navbar
        onHandleDisplayLinks={handleDisplayLinks}
        onHandleDisplayprofile={handleDisplayprofile}
        bgColor1={bgColor1}
        bgColor2={bgColor2}
      />
      {activeComponent === "one" && <Links />}
      {activeComponent === "two" && <ProfileDetails />}
    </div>
  );
};
export default Main;
