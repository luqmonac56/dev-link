import Image from "next/image";
import { SelectDemo } from "@/components/SelectDemo";
import getstarted from "@/../public/images/getstarted.png";
import empty from "@/../public/images/empty.png";
import link from "@/../public/images/link.png";
import linkmenu from "@/../public/images/link-menu.png";

const links = () => {

  
  return (
    <div className="w-full lg:flex items-center my-0 mx-auto md:w-[90%] lg:w-[80%] max-w-[1150px]">
      <div className=" hidden lg:block flex-1">
        <Image src={empty} alt="empty" />
      </div>

      <div className="md:px-8 flex px-4 py-6 flex-[2]  flex-col bg-white min-h-[700px] md:min-h-[700px] rounded-xl w-full md:w-[90%] my-0 mx-auto relative">
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl mb-2 font-bold">
            Customize your links
          </h1>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button className="border-purple mt-10 w-full">+ Add new link</button>
        </div>

        <section>
          <div className="bg-[#FAFAFA] mt-6 pt-8 pb-6 mb-4 hidden ">
            <Image
              className="w-60 h-40 mx-auto my-0"
              src={getstarted}
              alt="getstarted"
            />
            <h2 className="text-2xl md:text-3xl mb-4 mt-10 text-center font-bold">
              Let’s get you started
            </h2>
            <p className="text-center w-[90%] md:w-[80%] my-0 mx-auto">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
          <div className="bg-[#FAFAFA] px-3 py-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="flex text-[#737373] font-bold items-center gap-2">
                <Image className="" src={linkmenu} alt="linkmenu" />
                Link #1
              </span>
              <button className="font-normal">Remove</button>
            </div>
            <SelectDemo />
            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="password"> Link</label>
              <div className="flex items-center border-[1px] bg-white focus:border-blue-500 border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                <label htmlFor="link">
                  <Image src={link} alt="link" />
                </label>
                <input
                  className="pl-3 w-full  focus:border-blue-500 outline-none h-full"
                  placeholder="e.g. https://www.github.com/johnappleseed"
                  id="link"
                  type="url"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-2 w-[90%]">
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          <button className="py-3 px-6 text-white rounded-lg bg-[#633CFF] mt-4 w-full md:w-auto float-right">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default links;
