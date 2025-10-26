import tradeIcon1 from "/assets/trade-icon1.png";
import tradeIcon2 from "/assets/trade-icon2.png";
import tradeIcon3 from "/assets/trade-icon3.png";
import tradeIcon4 from "/assets/trade-icon4.png";
import tradeIcon5 from "/assets/trade-icon5.png";
import walletIcon from "/assets/shape_wallet.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import { motion } from "framer-motion";
import styled from "styled-components";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};



function TradingSection() {
  return (
    <div className="relative pt-10 pb-20">
      <img
        className="upDownAnim absolute lg:w-36 md:w-24 w-20 md:bottom-10 md:left-2 left-5 bottom-5 opacity-60"
        src={walletIcon}
        alt=""
      />
      <img
        className="scale-plus-animation absolute right-20 top-56 w-56 z-[0]"
        src={coineCubeIcon}
        alt=""
      />

      {/* Heading animation */}
      <motion.h2
        className="md:leading-[1.1em] font-bold title-font mb-16 text-center text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="text-white">TRADE ANY MARKET,</span>
        <br /> YOUR WAY
      </motion.h2>

      <div className="row flex md:flex-row flex-col justify-between items-center md:max-w-5xl mx-auto gap-5 md:px-0 px-10">
        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="bg trade-col" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={tradeIcon1} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Forex</h3>
            </div>
          </motion.div>
        </StyledWrapper>

        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
          >
            <div className="bg trade-col" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={tradeIcon2} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Metal</h3>
            </div>
          </motion.div>
        </StyledWrapper>
        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
          >
            <div className="bg trade-col" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={tradeIcon3} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Crypto</h3>
            </div>
          </motion.div>
        </StyledWrapper>
      </div>
      <div className="row mt-7 flex md:flex-row flex-col justify-between items-center md:max-w-5xl mx-auto gap-5 md:px-0 px-10">
        <div className="w-[30%]"></div>

        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.45}
          >
            <div className="bg trade-col" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={tradeIcon4} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Indices</h3>
            </div>
          </motion.div>
        </StyledWrapper>
        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
          >
            <div className="bg trade-col" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={tradeIcon5} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">
                Commodities
              </h3>
            </div>
          </motion.div>
        </StyledWrapper>

        <div className="w-[30%]"></div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    z-index: 111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
    .card img{
    width:80px;
    }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 97%;
    height: 240px;
    z-index: 2;
    backdrop-filter: blur(24px);
    border-radius: 20px;
    overflow: hidden;
    outline: 2px solid #022150;
    overflow: hidden;
  }

  .blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 150px;
  border-radius: 50%;
  background: #00c4f4;
  opacity: 0.9;
  filter: blur(25px);
  animation: blob-bounce 5s infinite ease-in-out;
  transform: translate(-50%, -50%);
}

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default TradingSection;
