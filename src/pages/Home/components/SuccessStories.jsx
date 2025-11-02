import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certifiacteImg from "/assets/certificate-of-withdrawl18.jpg";


function SuccessStories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="px-10">
           <h5 className="md:text-2xl text-lg lg:text-3xl font-bold text-white md:mb-4 mb-7 text-center">
              🏆 Trader Success Story: From Zero to Funded
            </h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center md:mt-8 mt-4">
            <div className="order-2 md:order-1">
              <p className="text-gray-300 mb-4 md:text-[16px] text-sm">
                Meet one of our traders who started with no prior trading
                experience, just dedication, consistency, and the drive to
                learn.
              </p>
              <p className="text-gray-300 md:text-[16px] text-sm">
                After joining the FundedLake community, he began sharing his
                trades, asking questions, and improving every single day. Within
                just two months, his persistence paid off — he became a
                FundedLake trader and started earning real payouts.
              </p>
              <h5 className="my-3 md:text-xl text-lg font-semibold text-white">
                In this exclusive 25-minute interview, he opens up about:
              </h5>
              <ul className="space-y-2.5 mb-3 text-white">
                <li>🎯 His early struggles and lessons learned</li>
                <li>🧠 The mindset shift that changed everything</li>
                <li>📈 How he managed risk and stayed consistent</li>
                <li>
                  💬 His advice to anyone still working toward getting funded
                </li>
              </ul>
              <p className="text-gray-300 md:text-[16px] text-sm">
                This story is proof that with discipline and the right
                environment, anyone can go from zero to funded.
              </p>
              <h6 className="my-3 md:text-xl text-lg font-semibold text-white p-0 mx-0">
                🎥 Watch the full interview below:
              </h6>
              <a className="text-[#00c4f4] hover:text-white"
                href="https://www.youtube.com/watch?v=l7qtPL6AIWk"
                target="_blank"
              >
                👉 https://www.youtube.com/watch?v=l7qtPL6AIWk
              </a>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/l7qtPL6AIWk?si=0U4XLJwO_WrPvxDS"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
           <h5 className="md:text-2xl text-lg lg:text-3xl font-bold text-white md:mb-4 mb-7  w-full text-center">
              Trader's Success Story : From $225 to $3226
            </h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:mt-8 mt-4">
            <div class="order-2 md:order-1"><p class="text-gray-300 mb-4 md:text-lg text-sm"><span class="font-semibold text-[var(--primary-color)]">Arjun Mehta </span>from India turned a $50,000 FundedLake 2-Step account purchased for just $225 into a life changing payout in just 8 days. What started as a simple challenge quickly transformed into a powerful reality: financial freedom, flexibility, and proof that with discipline and strategy, anything is possible.</p><p class="text-gray-300 md:text-lg text-sm">At FundedLake, stories like this are not rare, they are becoming the norm. Every payout is not just a withdrawal, it is a dream funded, a goal achieved, and a trader stepping into a whole new chapter of their life.</p></div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full rounded-2xl overflow-hidden">
               <img src={certifiacteImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SuccessStories;
