import React from "react";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import loading from "../assets/images/loading.png";
import pencil from "../assets/images/pencil.png";
import { TiArrowSortedDown } from "react-icons/ti";
import arrowback from "../assets/images/arrowb.png";
import arrowfront from "../assets/images/arrowf.png";
import purple from "../assets/images/purplelight.png"
import red from "../assets/images/redlight.png"

const data = [
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: red,
      action: "Approved",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: purple,
      action: "Rejected",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: red,
      action: "Approved",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: purple,
      action: "Approved",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: red,
      action: "Approved",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: purple,
      action: "Rejected",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: purple,
      action: "Rejected",
    },
    {
      title: "High way robbery",
      location: "Yaba, Lagos",
      nature: "Robbery",
      time: "11:15pm | 24 Oct, 2023",
      image: purple,
      action: "Approved",
    },
  ];

export default function FirstTable() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-poppins">
      <table className="bg-white">
        <tr className="bg-[#111111] text-white h-[3rem] ">
          <th className="px-[5rem] font-[300]">Title of Incident</th>
          <th className="px-[5rem] text-center font-[300]">
            Location
          </th>
          <th className="px-[6rem] py-[1rem] text-center w-[20rem] font-[300] flex">Nature of Incident</th>
          <th className="px-[5rem] font-[300]">Time Reported</th>
          <th className="px-[5rem] font-[300]">Action</th>
        </tr>
        {data.map((val, index) => {
          return (
            <tr>
              <td className=" py-[1rem] mt-[0.7rem]  border-b-[0.3px] border-[#e4e4e7] text-center">
                <div className="flex gap-[1rem]">
                  <img src={val.image} alt="" />
                  {val.title}
                </div>
                <span className="text-[0.8rem]">{val.email}</span>
              </td>
              <td className="py-[1rem] mt-[0.7rem] border-b-[0.3px] border-[#e4e4e7] text-center ">
                {val.location}
              </td>
              <td className=" py-[1rem] mt-[0.7rem] border-b-[0.3px] border-[#e4e4e7] text-center ">
                {val.nature}
              </td>
              <td className="py-[1rem] border-b-[0.3px] border-[#e4e4e7] text-center">
                {val.time}
              </td>
              <td className="py-[1rem] border-b-[0.3px] border-[#e4e4e7] grid justify-center items-center">
                <select name="" id="" className={`${val.action === "Approved" ? 'bg-[#00831D]' : 'bg-[#111111]'} w-[10rem] rounded-[5px] px-[1.8rem] py-[0.5rem] text-white`}>
                    <option value="">{val.action}</option>
                </select>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="flex justify-center items-center mt-[5rem] gap-[4rem] text-[0.8rem] text-[#a3a3a3]">
        <p>Items per page:</p>
        <div className="border-b-[#333] border-b-[1px] px-[0.2rem] flex justify-center items-center gap-[0.5rem]">
          <p className="bg-[#e9d5ff] px-[0.5rem] ">6</p>
          <TiArrowSortedDown />
        </div>
        <p>1-4 of 10</p>
        <div className="flex gap-[2rem]">
          <img src={arrowback} alt="" />
          <img src={arrowfront} alt="" />
        </div>
      </div>
    </div>
  );
}
