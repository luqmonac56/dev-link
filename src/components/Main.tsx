import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import React from "react";
import ProfileDetails from "./ProfileDetails";

const Main = () => {
  return (
    <div className="bg-[#FAFAFA] pt-4">
      <Navbar />
      <Links/>
      <ProfileDetails />
    </div>
  );
};
export default Main;
