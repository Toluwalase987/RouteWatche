import React from "react";
import trash from "../assets/images/trash.png";
import { FaTrashAlt } from "react-icons/fa";
import envelope from "../assets/images/envelope.png";
import { HiEnvelope } from "react-icons/hi2";

const today = [
  {
    title: "New Routewatcher Request",
    message:
      "You have received a new routewatcher request, please review the application.",
  },
  {
    title: "New Incident Uploaded",
    message:
      "New Incident has been uploaded. Review the details before publishing to the app.",
  },
  {
    title: "New Livechat Message",
    message: "Urgent! You have a new livechat message, respond immediately.",
  },
];
export default function Notifications() {
  return (
    <div className="my-[6rem] mx-[10rem] font-poppins">
      <div className="mb-[5rem]">
        <h1 className="text-[#71717a] mb-[1rem]">Today</h1>
        {today.map((today, index) => {
          return(
            <div className="border-[#d4d4d8] border-[1px] p-[0.6rem] flex justify-between rounded-[5px] bg-white mb-[1.4rem]">
            <div className="flex justify-center items-center gap-[2rem]">
              <div className="h-[3.5rem] w-[3.5rem] bg-[#e9d5ff] relative rounded-[100px]">
                <HiEnvelope className="text-[#2E007F] h-[1.7rem] w-[1.7rem] top-1/2 left-1/2 m-auto mt-[25%]" />
              </div>
              <div>
                <div key={index}>
                  <h3 className="text-[1.2rem] font-[400]">{today.title}</h3>
                  <p className="text-[1rem] font-[200] text-[#71717a]">
                    {today.message}
                  </p>
                </div>
              </div>
            </div>
            <FaTrashAlt className="mt-[1.1rem] text-[#71717a] text-[1.3rem]" />
          </div>
          )
        })}
      </div>
      <div className="mb-[5rem]">
        <h1 className="text-[#71717a] mb-[1rem]">Yesterday</h1>
        {today.map((today, index) => {
          return(
            <div className="border-[#d4d4d8] border-[1px] p-[0.6rem] flex justify-between rounded-[5px] bg-white mb-[1.4rem]">
            <div className="flex justify-center items-center gap-[2rem]">
              <div className="h-[3.5rem] w-[3.5rem] bg-[#e9d5ff] relative rounded-[100px]">
                <HiEnvelope className="text-[#2E007F] h-[1.7rem] w-[1.7rem] top-1/2 left-1/2 m-auto mt-[25%]" />
              </div>
              <div>
                <div key={index}>
                  <h3 className="text-[1.2rem] font-[400]">{today.title}</h3>
                  <p className="text-[1rem] font-[200] text-[#71717a]">
                    {today.message}
                  </p>
                </div>
              </div>
            </div>
            <FaTrashAlt className="mt-[1.1rem] text-[#71717a] text-[1.3rem]" />
          </div>
          )
        })}
      </div>
    </div>
  );
}
