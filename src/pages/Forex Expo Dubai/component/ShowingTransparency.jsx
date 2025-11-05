import React from "react";
import ShowingTransparencyImg1 from "/assets/showing-transparency-img1.png";
import ShowingTransparencyImg2 from "/assets/showing-transparency-img2.png";
import PrimaryButton from "../../../Components/PrimaryButton";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";

function ShowingTransparency() {
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
        <h2 className="text-center">
          <span className="text-white ">Meeting traders. Sharing stories.</span>{" "}
          Showing transparency.
        </h2>
        <p className="max-w-5xl mx-auto text-white md:text-xl text-lg text-center my-5">
          The FundedLake team spent two days at the Forex Expo Dubai, meeting
          traders from across the world and talking about what makes us
          different — real payouts, real community, and real people behind the
          firm. <br />
          It was a moment to connect face to face with traders who believe in
          the same mission, building a prop firm that actually stands with them.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 mb-12">
          <div className="bg-eff-col border-[#2f373d] group rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear flex-shrink-0 p-1 flex items-center justify-center group  relative col border lg:h-[420px]  h-auto">
            <div className="bg-[#070710] p-10 relative h-full rounded-2xl">
                <span class="dot_1 absolute bg-[#2f336d2b] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 left-5 rounded-full"></span>
                <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 left-5 rounded-full"></span>
                <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 right-5 rounded-full"></span>
                <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 right-5 rounded-full"></span>
             <img
              className="w-full object-cover h-full border-2 border-white"
              src={ShowingTransparencyImg1}
              alt=""
            />
            </div>
            
          </div>
           <div className="bg-eff-col border-[#2f373d] group rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear flex-shrink-0 p-1 flex items-center justify-center group  relative col border lg:h-[420px]  h-auto">
            <div className="bg-[#070710] p-10 relative h-full rounded-2xl">
                <span class="dot_1 absolute bg-[#2f336d2b] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1] group-hover:border-white top-5 left-5 rounded-full"></span>
                <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 left-5 rounded-full"></span>
                <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white top-5 right-5 rounded-full"></span>
                <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[10px] z-[1]  group-hover:border-white bottom-5 right-5 rounded-full"></span>
             <img
              className="w-full object-cover h-full border-2 border-white"
              src={ShowingTransparencyImg2}
              alt=""
            />
            </div>
            
          </div>
        </div>
        <PrimaryButton
          text="GET STARTED"
          link="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
        />
      </div>
      <img className="saperator w-full" src={topSep} alt="" />
    </div>
  );
}

export default ShowingTransparency;
