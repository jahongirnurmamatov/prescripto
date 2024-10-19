import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* LEFT SECTION */}
        <div className="">
          <img className="mb-5 w-40 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vel
            ullam, architecto facere quo, sint eius doloribus eos rem ipsum
            aliquam illum. A, excepturi fugiat mollitia vitae culpa omnis
            architecto.
          </p>
        </div>
        {/* MIDDLE SECTION */}
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* RIGHT SECTION */}
        <div >
          <p  className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+998-99-9404612</li>
            <li>jahongir.nurmamatov@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* COPYRIGHT text */}
      <div className="">
        <hr />
        <p className="py-5 text-center text-sm ">Copyright 2024 @ Prescripto - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
