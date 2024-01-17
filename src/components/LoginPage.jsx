import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/Logo.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef();


  useEffect(() => {
    userRef.current.focus();
  }, []);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, password, rememberMe });
  };

  return (
    <div className="border-[2px] rounded-[10px] shadow-1xl font-poppins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid justify-center items-center w-[30rem] text-center gap-[2rem] py-[3rem]">
      <div className="flex justify-center items-center gap-[0.5rem]">
        <div className="h-[3rem] w-[3rem]">
          <img src={logo} alt="" />
        </div>
        <h1 className="font-[600] text-[1.5rem]">RouteWatche</h1>
      </div>
      <div>
        <h1 className="text-[2rem] font-[600]">Admin DashBoard</h1>
        <p className="text-[0.8rem]">Welcome back! Please enter your details</p>
      </div>
      <form action="" className="grid gap-[2rem]" onSubmit={handleSubmit}>
        <div className="grid ">
          <label className="text-left" htmlFor="email">
            Email
          </label>
          <input
            className="border-[0.5px] border-[#333] p-[0.3rem] rounded-[5px] focus:outline-none"
            ref={userRef}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid relative">
          <label className="text-left" htmlFor="password">
            Password
          </label>
          <input
            className="border-[0.5px] border-[#333] p-[0.3rem] rounded-[5px] focus:outline-none"
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={`absolute right-[1rem] top-[2rem] text-[1.3rem] cursor-pointer`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        <div className="flex gap-[0.5rem]">
          <input
            className="h-[1.2rem] w-[1.2rem]"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="text-[0.8rem]" htmlFor="checkbox">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#2E007F] text-white py-[0.8rem] rounded-[5px] cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
