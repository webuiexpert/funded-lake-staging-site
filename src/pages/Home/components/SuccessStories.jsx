import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certifiacteImg from "/assets/certificate-of-withdrawl18.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react"; // modern arrow icons

function SuccessStories() {
  // ✅ Custom arrow components (styled nicely)
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 lg:-right-6 md:-right-2  -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-[#00c4f4]/20 hover:bg-[#00c4f4]/40 text-white rounded-full cursor-pointer transition"
      onClick={onClick}
    >
      <ChevronRight size={22} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 lg:-left-6 md:-left-4 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-[#00c4f4]/20 hover:bg-[#00c4f4]/40 text-white rounded-full cursor-pointer transition"
      onClick={onClick}
    >
      <ChevronLeft size={22} />
    </div>
  );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          bottom: "0px",
        }}
      >
        <ul className="!m-0 flex justify-center gap-0">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full md:hidden block hover:bg-[#00c4f4]"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // tablets and below
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 380, // mobile devices
        settings: {
          arrows: false,
          dots: true,
        },
      }
    ],
  };

  return (
    <div className="relative md:mt-10 mt-6 lg:mb-10 mb-0">
      <div className="max-w-6xl success-story rounded-4xl mx-auto px-2 md:px-6 lg:px-10">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="rounded-2xl px-2 py-10 md:px-8 shadow-lg">
            <h5 className="text-center md:text-2xl text-lg lg:text-3xl font-bold text-white mb-6">
              🏆 Trader Success Story: From Zero to Funded
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

          {/* Slide 2 */}
          <div className="rounded-2xl px-2 py-10 md:px-8 shadow-lg">
            <h5 className="text-center md:text-2xl text-lg lg:text-3xl font-bold text-white mb-6">
              Trader's Success Story : From $225 to $3226
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="font-semibold text-[#00c4f4]">
                    Arjun Mehta{" "}
                  </span>
                  from India turned a $50,000 FundedLake 2-Step account purchased
                  for just $225 into a life-changing payout in just 8 days. What
                  started as a simple challenge quickly transformed into a
                  powerful reality: financial freedom, flexibility, and proof
                  that with discipline and strategy, anything is possible.
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  At FundedLake, stories like this are not rare—they are becoming
                  the norm. Every payout is not just a withdrawal, it is a dream
                  funded, a goal achieved, and a trader stepping into a whole new
                  chapter of their life.
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
        </Slider>
      </div>
    </div>
  );
}

export default SuccessStories;
