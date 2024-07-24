import Image from "next/image";
import photo from "@/../public/images/photo.png";

const ProfileDetails = () => {
  return (
    <section className="md:px-8 px-4 py-6 flex-[2] flex flex-col bg-white min-h-[700px] md:min-h-[700px] rounded-xl w-full md:w-[90%] my-0 mx-auto relative">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl mb-2 font-bold">Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>
      </div>
      <div className="flex items-center bg-[#FAFAFA] rounded-xl justify-between p-4">
        <h5 className="flex-1">Profile picture</h5>
        <div className="flex items-center gap-4 flex-[2]">
          <div className="bg-[#EFEBFF] flex rounded-xl h-48 w-48">
            <div className="m-auto">
              <Image className="m-auto" src={photo} alt="photo" />
              <span className="text-[#633CFF]">+ Upload Image</span>
            </div>
          </div>
          <p className="text-xs w-[50%]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] mt-4 rounded-xl justify-between p-4 flex  flex-col gap-3">
        <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between">
          <label htmlFor="first" className="flex-1">
            First name*
          </label>
          <input
            id="first"
            className="border-[1px] bg-white border-[#D9D9D9] px-2 rounded-[8px] h-[48px] flex-1"
            type="text"
            placeholder="Ben"
          />
        </div>
        <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between">
          <label htmlFor="last" className="flex-1">
            Last name*
          </label>
          <input
            id="last"
            className="border-[1px] bg-white border-[#D9D9D9] px-2 rounded-[8px] h-[48px] flex-1"
            type="text"
            placeholder="Wright"
          />
        </div>
        <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between">
          <label htmlFor="email" className="flex-1">
            Email
          </label>
          <input
            id="email"
            className="border-[1px] bg-white border-[#D9D9D9] px-2 rounded-[8px] h-[48px] flex-1"
            type="email"
            placeholder="ben@example.com"
          />
        </div>
      </div>

      <div className="absolute bottom-2 w-[90%]">
        <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
        <button className="py-3 px-6 text-white rounded-lg bg-[#633CFF] mt-4 w-full md:w-auto float-right">
          Save
        </button>
      </div>
    </section>
  );
};

export default ProfileDetails;
