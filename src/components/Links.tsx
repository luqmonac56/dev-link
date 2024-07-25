"use client";

import Image from "next/image";
import { SelectDemo } from "@/components/SelectDemo";
import getstarted from "@/../public/images/getstarted.png";
import empty from "@/../public/images/empty.png";
import linkicon from "@/../public/images/link.png";
import linkmenu from "@/../public/images/link-menu.png";
import { useEffect, useState } from "react";
import db from "@/app/firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore";
import SelectComponent from "./SelectComponent";

interface myFunction {
  handleSave: () => void;
}

const Links = () => {
  const [items, setItems] = useState([]);
  const [link, setLink] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [docs, setDocs] = useState("");

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     // const q = query(collection(db, "items"));
  //     const querySnapshot = await getDocs(
  //       collection(db, "items")
  //     );

  //     const itemsList = querySnapshot.docs.map((doc) => ({
  //       ...(doc.data() as Item),
  //       id: doc.id,
  //     }));

  //     setItems(itemsList);
  //     console.log(itemsList);
  //   };

  //   fetchItems();
  // }, []);

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      console.log();
      
      // setItems(
      //   // querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      // );
    };
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value);
    console.log("Selected Value:", event.target.value);
  };

  const handleAddNew = async () => {
    try {
      const docRef = await addDoc(collection(db, "items"), {
        link: link,
        platform: platform,
      });
      console.log(docRef);

      // setDocs(docRef)
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleSave = async () => {
    try {
      const docRef = await addDoc(collection(db, "items"), {
        link: link,
        platform: platform,
      });
      console.log(docRef);

      // setDocs(docRef)
    } catch (error) {
      console.log((error as Error).message);
    }
  };

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
          { !items &&
            <div className="bg-[#FAFAFA] mt-6 pt-8 pb-6 mb-4">
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
          }
          {items && <div className="bg-[#FAFAFA] px-3 py-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="flex text-[#737373] font-bold items-center gap-2">
                <Image className="" src={linkmenu} alt="linkmenu" />
                Link #1
              </span>
              <button className="font-normal">Remove</button>
            </div>
            <SelectComponent handleChange={handleChange} platform={platform} />
            {/* <SelectDemo handleChange={handleChange} platform={platform} /> */}
            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="password"> Link</label>
              <div className="flex items-center border-[1px] bg-white border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                <label htmlFor="link">
                  <Image src={linkicon} alt="link" />
                </label>
                <input
                  className="pl-3 w-full  focus:border-blue-500 outline-none h-full"
                  placeholder="e.g. https://www.github.com/johnappleseed"
                  id="link"
                  value={link}
                  type="url"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </div>
          </div>}
        </section>

        <div className="absolute bottom-2 w-[90%]">
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          <button
            type="submit"
            onClick={handleSave}
            className="py-3 px-6 text-white rounded-lg bg-[#633CFF] mt-4 w-full md:w-auto float-right"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
