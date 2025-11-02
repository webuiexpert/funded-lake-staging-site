import React from "react";
import certifiacteImg from "/assets/certificate-of-withdrawl18.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

function SuccessStoriesSlider() {
  return (
    <div className=" w-full max-w-7xl mx-auto md:py-10 py-6 lg:mb-16 md:mb-10">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        autoHeight={true} // 👈 add this line
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="success-story rounded-4xl px-2 py-10 lg:px-20 md:px-12 shadow-lg">
            <h5 className="text-center md:text-2xl text-lg lg:text-3xl font-bold text-white mb-6">
               Trader's Success Story: From Zero to Funded
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <p className="text-gray-300 text-sm md:text-base">
                  Meet one of our traders who started with no prior trading
                  experience, just dedication, consistency, and the drive to
                  learn.
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  After joining the FundedLake community, he began sharing his
                  trades, asking questions, and improving every single day.
                  Within just two months, his persistence paid off — he became a
                  FundedLake trader and started earning real payouts.
                </p>
                <h5 className="text-white font-semibold text-lg md:text-xl mt-4">
                  In this exclusive 25-minute interview, he opens up about:
                </h5>
                <ul className="text-white space-y-2 text-sm md:text-base">
                  <li>🎯 His early struggles and lessons learned</li>
                  <li>🧠 The mindset shift that changed everything</li>
                  <li>📈 How he managed risk and stayed consistent</li>
                  <li>
                    💬 His advice to anyone still working toward getting funded
                  </li>
                </ul>
                <p className="text-gray-300 text-sm md:text-base">
                  This story is proof that with discipline and the right
                  environment, anyone can go from zero to funded.
                </p>
                <h6 className="text-white font-semibold text-lg md:text-xl mt-3">
                  🎥 Watch the full interview below:
                </h6>
                <a
                  className="text-[#00c4f4] hover:text-white break-all"
                  href="https://www.youtube.com/watch?v=l7qtPL6AIWk"
                  target="_blank"
                  rel="noreferrer"
                >
                  👉 https://www.youtube.com/watch?v=l7qtPL6AIWk
                </a>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/l7qtPL6AIWk?si=0U4XLJwO_WrPvxDS"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="success-story rounded-4xl relative px-2 py-10 lg:px-20 md:px-12 shadow-lg">
            <h5 className="text-center md:text-2xl text-lg lg:text-3xl font-bold text-white mb-6">
              Trader's Success Story : From $225 to $3226
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="font-semibold text-[#00c4f4]">
                    Arjun Mehta{" "}
                  </span>
                  from India turned a $50,000 FundedLake 2-Step account
                  purchased for just $225 into a life-changing payout in just 8
                  days. What started as a simple challenge quickly transformed
                  into a powerful reality: financial freedom, flexibility, and
                  proof that with discipline and strategy, anything is possible.
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  At FundedLake, stories like this are not rare—they are
                  becoming the norm. Every payout is not just a withdrawal, it
                  is a dream funded, a goal achieved, and a trader stepping into
                  a whole new chapter of their life.
                </p>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden">
                  <img
                    src={certifiacteImg}
                    alt="Certificate"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SuccessStoriesSlider;
