import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <label htmlFor="" className="mb-2">
        Platform
      </label>
      {/* <SelectLabel>Platform</SelectLabel> */}
      <SelectTrigger className="focus: active:border-red-500 focus:border-blue-500 outline-none focus:ring-0">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="github">GitHub</SelectItem>
          <SelectItem value="youtube">YouTube</SelectItem>
          <SelectItem value="linkedin">LinkedIn</SelectItem>
          <SelectItem value="facebook">Facebook</SelectItem>
          <SelectItem value="frontendMentor">Frontend Mentor</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
