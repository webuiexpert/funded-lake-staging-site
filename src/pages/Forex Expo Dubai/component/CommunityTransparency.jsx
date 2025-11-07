import React from "react";
import CommunityTransparencyImg1 from "/assets/community-transparency-img1.JPG";
import CommunityTransparencyImg2 from "/assets/community-transparency-img2.JPG";
import PrimaryButton from "../../../Components/PrimaryButton";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";

function CommunityTransparency() {
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
      <div className="md:py-16 py-10 lg:px-0 md:px-5 px-4 max-w-7xl mx-auto relative z-20">
        <h2 className="text-center">
          <span className="text-white ">Transparency. Payouts.</span>Community.
        </h2>
        <p className="max-w-5xl mx-auto text-white md:text-xl text-lg text-center my-5">
          Throughout the event, we showcased how FundedLake operates with full
          transparency and real proof of consistency. Visitors saw live payout
          certificates, community growth updates, and real trader success
          stories that define what FundedLake stands for. <br /> Every
          conversation reflected our goal to keep building a fair and trusted
          firm where traders come first.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-12">
          <div className="bg-eff-col border-[#2f373d] group rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear flex-shrink-0 p-1 flex items-center justify-center group  relative col border lg:h-[420px]  h-auto">
            <div className="bg-[#070710] p-10 relative w-full h-full rounded-2xl">
              <span class="dot_1 absolute bg-[#2f336d2b] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 left-5 rounded-full"></span>
              <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 left-5 rounded-full"></span>
              <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 right-5 rounded-full"></span>
              <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 right-5 rounded-full"></span>
              <img
                className="w-full object-cover h-full border-2 border-white"
                src={CommunityTransparencyImg1}
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
                className="w-full h-full border-2 border-white"
                src={CommunityTransparencyImg2}
                alt=""
              />
            </div>
          </div>
        </div>
        <em className="text-xl text-white text-center max-w-[450px] block mx-auto mb-7">
          Our goal has always been simple. Build a firm where traders empower traders
        </em>
        <PrimaryButton
          text="Join Our Discord Community"
          link="https://discord.gg/vDSnjmxndy"/>
      </div>
    </div>
  );
}

export default CommunityTransparency;
