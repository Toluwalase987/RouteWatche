import React from "react";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import loading from "../assets/images/loading.png";
import pencil from "../assets/images/pencil.png";
import { TiArrowSortedDown } from "react-icons/ti";
import arrowback from "../assets/images/arrowb.png";
import arrowfront from "../assets/images/arrowf.png";

const data = [
  {
    name: "John Conor",
    email: "john@mailinator.com",
    dateCreated: "24 Oct, 2023",
    status: "Pending",
  },
  {
    name: "Will Smith",
    email: "smith@mailinator.com",
    dateCreated: "24 Oct, 2023",
    status: "Inactive",
  },
  {
    name: "Sandra Stone",
    email: "sandra@mailinator.com",
    dateCreated: "24 Oct, 2023",
    status: "Active",
  },
  {
    name: "John Conor",
    email: "john@mailinator.com",
    dateCreated: "24 Oct, 2023",
    status: "Pending",
  },
  {
    name: "Will Smith",
    email: "smith@mailinator.com",
    dateCreated: "24 Oct, 2023",
    status: "Inactive",
  },
  {
    name: "Sandra Stone",
    email: "sandra@mailinator.com",
    dateCreated: "24 Oct, 2023",
    status: "Active",
  },
];
export default function FirstTable() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-poppins">
      <table className="bg-white">
        <tr className="bg-[#111111] text-white h-[3rem] ">
          <th className="px-[6rem] font-[300]">Name</th>
          <th className="px-[6rem] py-[1rem] text-center w-[20rem] font-[300] flex">
            Date Created
          </th>
          <th className="px-[5rem] font-[300]">Status</th>
          <th className="px-[5rem] font-[300]">Action</th>
        </tr>
        {data.map((val, index) => {
          return (
            <tr>
              <td className=" pb-[1rem] mt-[0.7rem]  border-b-[0.3px] border-[#e4e4e7] text-center grid w-[20rem]">
                {val.name}
                <span className="text-[0.8rem]">{val.email}</span>
              </td>
              <td className=" pb-[1rem] mt-[0.7rem] border-b-[0.3px] border-[#e4e4e7] text-center w-[25rem]">
                {val.dateCreated}
              </td>
              <td className=" pb-[1rem] mt-[0.7rem] border-b-[0.3px] border-[#e4e4e7] text-center w-[25rem]">
                {val.status}
              </td>
              <td className="px-[5rem] pt-[] pb-[2.5rem] border-b-[0.3px] border-[#e4e4e7] flex justify-center items-center gap-[0.5rem]">
                <div className="mt-[]">
                  <img src={pencil} alt="" />
                </div>
                <div>
                  <img src={loading} alt="" />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="flex justify-center items-center mt-[5rem] gap-[4rem] text-[0.8rem] text-[#a3a3a3]">
        <p>Items per page:</p>
        <div className="border-b-[#333] border-b-[1px] px-[0.2rem] flex justify-center items-center gap-[0.5rem]">
          <p className="bg-[#e9d5ff] px-[0.5rem] ">
            6 
          </p>
          <TiArrowSortedDown/>
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
