import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div className=" font-poppins">
      <div className="border-[1px] border-[#d4d4d8] rounded-[10px] my-[5rem] mx-[7rem] p-[3rem]">
        <h1 className="text-[1.5rem] font-[600]">Reset Password</h1>
        <p className="text-[0.8rem] text-[#a1a1aa]">
          Change your account password
        </p>
        <form action="" className="mt-[1rem]">
          <div className="grid grid-cols-2 gap-[7%] mb-[1.5rem]">
            <div className="grid relative">
              <label
                className="text-left text-[0.9rem] text-[#382657]"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                className="border-[0.5px] border-[#333] p-[0.3rem] rounded-[5px] focus:outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
              />
              <span
                className={`absolute right-[1rem] top-[1.8rem] text-[1.3rem] cursor-pointer`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="grid relative">
              <label
                className="text-left text-[0.9rem] text-[#382657]"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="border-[0.5px] border-[#333] p-[0.3rem] rounded-[5px] focus:outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
              />
              <span
                className={`absolute right-[1rem] top-[1.8rem] text-[1.3rem] cursor-pointer`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
          <button className="bg-[#2E007F] text-[0.8rem] text-white py-[0.9rem] px-[1rem] rounded-[5px] cursor-pointer">
            Update Password
          </button>
        </form>
      </div>

      <div className="border-[1px] border-[#d4d4d8] rounded-[10px] mt-[-2rem] mx-[7rem] p-[3rem]">
        <h1 className="text-[1.5rem] font-[600]">General</h1>
        <p className="text-[0.8rem] text-[#a1a1aa]">
          Choose preferred display language
        </p>
        <form action="" className="mt-[1rem]">
          <div className="grid gap-[2rem] mb-[1.5rem]">
            <div className="flex justify-start items-center gap-[13.8rem] relative">
              <label
                className="text-left text-[0.9rem] text-[#333]"
                htmlFor="password"
              >
                Language
              </label>
              <select
                name=""
                id=""
                className="border-[1px] border-[#d1d5db] w-[50rem] text-[#a0a2a6] p-[0.5rem] rounded-[5px]"
              >
                <option value="">Select Language</option>
              </select>
            </div>
            <div className="flex justify-start items-center gap-[10rem]  relative">
              <label
                className="text-left text-[0.9rem] text-[#333]"
                htmlFor="password"
              >
                Timezone / Region
              </label>
              <select
                name=""
                id=""
                className="border-[1px] border-[#d1d5db] w-[50rem] text-[#a0a2a6] p-[0.5rem] rounded-[5px]"
              >
                <option value="">Select Region</option>
              </select>
            </div>
          </div>
          <button className="bg-[#2E007F] text-[0.8rem] text-white py-[0.9rem] px-[2rem] rounded-[5px] cursor-pointer">
            Save
          </button>
        </form>
      </div>

      <div className="border-[1px] border-[#d4d4d8] rounded-[10px] mt-[3rem] mx-[7rem] p-[3rem]">
        <h1 className="text-[1.5rem] font-[600]">Terms and Conditions</h1>
        <p className="text-[0.8rem] text-[#a1a1aa]">
          Update the terms and conditions
        </p>
        <form action="" className="mt-[1rem]">
          <div className="flex flex-col gap-[2rem]">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, repellat magnam omnis exercitationem dicta aut ex accusamus suscipit, iste velit expedita sunt nisi eveniet quas commodi tempora aspernatur fugit quod."
              className="border-[1px] border-[#d1d5db] text-[#] w-[70rem] bg-[#d4d4d8] p-[0.5rem] rounded-[5px]"
            ></textarea>
            <button className="bg-[#2E007F] w-[10rem] text-[0.8rem] text-white py-[0.9rem] px-[2rem] rounded-[5px] cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
