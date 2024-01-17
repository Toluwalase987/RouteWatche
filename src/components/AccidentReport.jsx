import React from "react";
import car1 from "../assets/images/car1.png"
import car2 from "../assets/images/car2.png"
import clock from "../assets/images/clock.png"

export default function AccidentReport() {
  return (
    <div className=" my-[3rem] mx-[5rem] font-poppins">
      <div className="flex gap-[3rem]">
        <div className=" h-[27rem] w-[40rem]">
            <img className="w-full h-full" src={car1} alt="" />
        </div>
        <div className="w-[40rem] grid gap-[2rem]">
          <div className="h-[8rem] bg-[#111111] flex gap-[1rem]">
            <div className="h-[8rem] w-[8rem] mb-[2rem] mx-[1rem] ">
                <img className="w-full h-full" src={clock} alt="" />
            </div>
            <div className="border-[#fff] border-[2px] h-[7rem] mt-[0.6rem]"></div>
            <div className="text-white mt-[2rem]">
                <h1 className="font-[600] text-[1.2rem]">Time Submitted:</h1>
                <div className="flex gap-[2rem] text-[2.1rem] font-[300]">
                    <h1>15:29:45</h1>
                    <h1>31st Oct. 2023</h1>
                </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="border-[1px] h-[17rem] w-[18rem]">
                <img className="w-full h-full" src={car2} alt="" />
            </div>
            <div className="border-[1px]  h-[17rem] w-[18rem]">
            <img className="w-full h-full" src={car2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[3rem] relative">
        <h1 className=" bg-white font-[500] text-[1.1rem] absolute top-[-0.75rem] pr-[2rem]">
          Details of the Incident
        </h1>
        <div className="border-b-[#333] border-[1px]"></div>
        <p className="mt-[2rem] text-[1rem] font-[200]">
          Lorem ipsum dolor sit amet, consectetur adisg elit. Tempor
          pellentesque volutt tellus tesque. Lorem ipsum dolor sit amet,
          consectetur adisg elit. Tempor pellentesque volutt tellus tesque.
          Lorem ipsum dolor sit amet, consectetur adisg elit. Tempor
          pellentesque volutt tellus tesque. Lorem ipsum dolor sit amet,
          consectetur adisg elit. Tempor pellentesque volutt tellus tesque.
        </p>
      </div>
      <div className="mt-[3rem] relative">
        <h1 className=" bg-white absolute top-[-0.75rem] pr-[2rem] font-[500] text-[1.1rem]">
          Other Links
        </h1>
        <div className="border-b-[#333] border-[1px]"></div>
        <p className="mt-[2rem] font-[200]">www.routewatche.com</p>
      </div>
      <div className="flex justify-center gap-[3rem] mt-[1rem]">
        <button className="bg-[#00831D] text-white px-[2.5rem] py-[0.8rem] rounded-[5px]">Approve</button>
        <button className="bg-[#111111] text-white px-[2.5rem] py-[0.8rem] rounded-[5px]">Reject</button>
      </div>
    </div>
  );
}
