import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { TfiClip } from "react-icons/tfi";
import { SlPicture } from "react-icons/sl";
import { IoSend } from "react-icons/io5";

const data = [
  {
    name: "Bryon Harmonie",
    date: "13 January",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, neque vel…",
    color: "#c084fc",
  },
  {
    name: "Blossom Freddy",
    date: "12 January",
    message:
      "Quisque facilisis interdum tortor sed tempus. Cras ac turpis quis ex convallis accumsan…",
    color: "#99f6e4",
  },
  {
    name: "Chanté Moreen",
    date: "10 January",
    message:
      "Quisque facilisis interdum tortor sed tempus. Cras ac turpis quis ex convallis accumsan…",
    color: "#93c5fd",
  },
  {
    name: "Bryon Harmonie",
    date: "9 January",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, neque vel…",
    color: "#fed7aa",
  },
];
export default function Messages() {
  return (
    <div className="my-[4rem] mx-[9rem] flex gap-[3rem] font-poppins">
      <div className="">
        <div className="grid grid-cols-3 justify-center items-center text-center h-[1.7rem] rounded-[5px] font-[300]">
          <p className="bg-white border-r-[#94a3b8] border-[1px]">
            New
          </p>
          <p className=" text-[#94a3b8] bg-[#f1f5f9] border-r-[#94a3b8] border-[1px] ">
            Closed
          </p>
          <p className="text-[#94a3b8] bg-[#f1f5f9] border-r-[#94a3b8] border-[1px]">All</p>
        </div>
        {data.map((val, index) => {
          return (
            <div
              className="rounded-[10px] shadow-xl mt-[2rem] border-[1px]"
              key={index}
            >
              <div className="px-[1rem] py-[0.5rem] border-b-[1px] border-[#d1d5db] flex items-center gap-[3rem]">
                <div
                  style={{ backgroundColor: val.color }}
                  className="border-[1px] h-[4rem] w-[4rem] rounded-[100px]"
                >
                  <IoPersonSharp className="text-[1.8rem] w-[1.7rem] top-1/2 left-1/2 m-auto mt-[25%]" />
                </div>
                <h2 className="ml-[-2rem] font-[500]">{val.name}</h2>
                <p className="text-[0.7rem] font-[300]">{val.date}</p>
              </div>
              <p className="px-[0.8rem] py-[0.7rem] text-[0.8rem] font-[300]">
                {val.message}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-[45rem] px-[2rem] relative py-[1.6rem]">
        <div className="flex justify-between">
          <h1 className="text-[1.5rem] font-[600]">Live Support</h1>
          <button className="bg-[#2E007F] text-white py-[0.5rem] px-[1.3rem] rounded-[10px]">
            Actions
          </button>
        </div>
        <div className="mt-[4rem] flex gap-[2rem]">
          <div className="border-[1px] h-[3rem] w-[3rem] rounded-[100px] bg-[#c084fc]">
            <IoPersonSharp className="text-[1.3rem] w-[1.7rem] top-1/2 left-1/2 m-auto mt-[25%]" />
          </div>
          <div className="w-[37rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-[1rem] font-[600]">Bryon Harmonie</h1>
              <p className="text-[0.8rem]">13 January 14:49</p>
            </div>
            <p className="mt-[1rem] text-[0.9rem] font-[300]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              harum corrupti quisquam, quas laborum id quidem natus officiis
              totam similique maiores hic aperiam sed temporibus laboriosam
              beatae labore reiciendis quam!
            </p>
          </div>
        </div>
        <div className="mt-[4rem] flex gap-[2rem]">
          <div className="border-[1px] h-[3rem] w-[3rem] rounded-[100px] bg-[#c084fc]">
            <IoPersonSharp className="text-[1.3rem] w-[1.7rem] top-1/2 left-1/2 m-auto mt-[25%]" />
          </div>
          <div className="w-[37rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-[1rem] font-[600]">Bryon Harmonie</h1>
              <p className="text-[0.8rem]">13 January 14:49</p>
            </div>
            <p className="mt-[1rem] text-[0.9rem] font-[300]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              harum corrupti quisquam, quas laborum id quidem natus officiis
              totam similique maiores hic aperiam sed temporibus laboriosam
              beatae labore reiciendis quam!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-[90%] absolute bottom-[2rem]">
          <div className="h-[3rem] w-[3rem] rounded-[100px] bg-[#99f6e4]"></div>
          <input
            className="w-[30rem] px-[1rem] focus:outline-none"
            type="text"
            placeholder="Type message here..."
          />
            <div className="flex gap-[1rem]">
            <TfiClip className="text-[1.6rem] text-[#cbd5e1]"/>
            <SlPicture className="text-[1.6rem] text-[#cbd5e1]"/>
            <IoSend className="text-[1.6rem] text-[#2E007F]"/>
            </div>
        </div>
      </div>
    </div>
  );
}
