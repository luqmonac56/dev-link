"use client";
import React, { useState } from "react";

interface SelectProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  platform: string;
}

const SelectComponent = (props: SelectProps) => {
  const { handleChange, platform } = props;
  return (
    <div className="select-wrapper">
      <label htmlFor="platforms" className="mb-2">
        Platform
      </label>
      <select
        className="px-3 w-full  border-[1px] bg-white border-[#D9D9D9] rounded-[8px] h-[48px] focus:border-blue-500 outline-none"
        id="platforms"
        value={platform}
        onChange={handleChange}
      >
        <option value="github">GitHub</option>
        <option value="youtube">YouTube</option>
        <option value="linkedin">LinkedIn</option>
        <option value="facebook">Facebook</option>
        <option value="frontend Mentor">Frontend Mentor</option>
      </select>
    </div>
  );
};

export default SelectComponent;
