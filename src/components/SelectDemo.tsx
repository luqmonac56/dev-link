// import React from "react";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// interface SelectProps {
//   // handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   handleChange: (value: string) => void;
//   platform: string;
// }

// export function SelectDemo(props: SelectProps) {
//   const { handleChange, platform } = props;

//   const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     handleChange(event.target.value);
//   };
  
//   return (
//     <Select value={platform} onValueChange={onChange}>
//       <label htmlFor="" className="mb-2">
//         Platform
//       </label>
//       <SelectTrigger className="focus outline-none focus:ring-0">
//         <SelectValue placeholder="" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem value="github">GitHub</SelectItem>
//           <SelectItem value="youtube">YouTube</SelectItem>
//           <SelectItem value="linkedin">LinkedIn</SelectItem>
//           <SelectItem value="facebook">Facebook</SelectItem>
//           <SelectItem value="frontendMentor">Frontend Mentor</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }
