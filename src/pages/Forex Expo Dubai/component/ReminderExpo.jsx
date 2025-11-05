import React from "react";
import ReminderTransparencyImg1 from "/assets/reminder-transparency-img1.JPG";
import ReminderTransparencyImg2 from "/assets/reminder-transparency-img2.JPG";
import PrimaryButton from "../../../Components/PrimaryButton";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import { motion } from "framer-motion";


function ReminderExpo() {
  return (
    <div className="relative">
      <div className="navy-left-side-gradient d-block"></div>
      <div className="navy-right-side-gradient d-block"></div>
      <img
        className="scale-plus-animation absolute left-10 bottom-2/3 w-56 md:block hidden"
        src={dollarCubeIcon}
        alt=""
      />
      <img
        className="scale-plus-animation absolute top-2/3 right-20 w-56 md:block hidden"
        src={coineCubeIcon}
        alt=""
      />
      <img className="saperator w-full" src={botSep} alt="" />
      <div className="md:py-10 py-10 lg:px-0 md:px-5 px-4 max-w-7xl mx-auto relative z-20">
        <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
        className="text-center">
          <span className="text-white block">This was more than an expo</span> It was a reminder of why we started.
        </motion.h2>
        <p className="max-w-5xl mx-auto text-white md:text-xl text-lg text-center my-5">
        The conversations we had, the stories we heard, and the energy from traders reminded us why FundedLake exists. <br /> We left Dubai more motivated than ever to keep improving funding opportunities, scaling options, and payout systems for traders around the world.</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 mb-12">
          <div className="bg-eff-col border-[#2f373d] group rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear flex-shrink-0 p-1 flex items-center justify-center group  relative col border lg:h-[420px]  h-auto">
            <div className="bg-[#070710] p-10 relative w-full h-full rounded-2xl">
              <span class="dot_1 absolute bg-[#2f336d2b] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 left-5 rounded-full"></span>
              <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 left-5 rounded-full"></span>
              <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 right-5 rounded-full"></span>
              <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 right-5 rounded-full"></span>
              <img
                className="w-full object-cover h-full border-2 border-white"
                src={ReminderTransparencyImg1}
                alt=""
              />
            </div>
          </div>
          <div className="bg-eff-col border-[#2f373d] group rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear flex-shrink-0 p-1 flex items-center justify-center group  relative col border lg:h-[420px]  h-auto">
            <div className="bg-[#070710] p-10 relative w-full h-full rounded-2xl">
              <span class="dot_1 absolute bg-[#2f336d2b] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1] group-hover:border-white top-5 left-5 rounded-full"></span>
              <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 left-5 rounded-full"></span>
              <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 right-5 rounded-full"></span>
              <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 right-5 rounded-full"></span>
              <img
                className="w-full object-cover h-full border-2 border-white"
                src={ReminderTransparencyImg2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <PrimaryButton
            text="Join Our Discord Community"
            link="https://discord.gg/vDSnjmxndy"
          />
          <PrimaryButton
            text="GET FUNDED"
            link="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
          />
        </div>
      </div>
      <img className="saperator w-full" src={topSep} alt="" />
    </div>
  );
}

export default ReminderExpo;
