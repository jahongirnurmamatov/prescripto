import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>

        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[360px]"
            src={assets.about_image}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 text-left">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              sapiente quo molestias illo nemo, nulla ab numquam sint veritatis
              esse repellat maiores distinctio, error odio fuga totam placeat?
              Cumque, consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quia assumenda quaerat quod ipsam vitae, ex reiciendis quidem ad
              odio quibusdam, eligendi fugiat officiis expedita quasi nobis,
              mollitia consectetur illo.
            </p>
            <p className="font-bold text-gray-800">Our vision</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              odio, velit ullam sequi quo corrupti molestiae veniam magnam at
              dignissimos perferendis nihil tempora blanditiis aliquam rem.
              Repellat nihil similique labore.
            </p>
          </div>
        </div>
      </div>
      <div className="text-xl my-4">
        <p className="text-gray-700 font-semibold">
          WHY <span> CHOOSE US </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white hover:scale-105 duration-500 transtion-all text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white  hover:scale-105 duration-500 transtion-all text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Accesss to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white hover:scale-105 duration-500 transtion-all text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your healh.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
