import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"
import { motion } from "framer-motion";
import SuccessStories from "./SuccessStories";


function SuccessStory() {
  return (
    <div className="md:py-16 lg:px-0 px-4 py-10 relative">
      <img className="saperator absolute top-0 left-0 w-full" src={botSep} alt="" />
      <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
      <img className="scale-plus-animation absolute z-0 top-32 left-10 w-56 rotate-28 md:block hidden" src={dollarCubeIcon} alt="" />
      <img className="scale-plus-animation absolute z-0 right-20 bottom-56 w-56" src={coineCubeIcon} alt="" />
      <motion.h2 className="md:leading-[1.1em] font-bold title-font  z-[1] relative mb-2 lg:mt-10 md:mt-6 mt-2 text-center text-white"
       initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
      >
        <span className="text-white">trader's, </span>success story
      </motion.h2>
     
      <div className="success-story lg:mt-16 md:mt-12 mt-6 lg:mb-24 md:mb-16 mb-10 rounded-4xl relative md:text-left text-center md:max-w-7xl mx-auto md:px-8 md:py-8 px-3 py-5 lg:p-12 shadow-lg">
         <h5 className="md:text-2xl text-xl lg:text-3xl font-bold text-white mb-4 w-full text-center">
              🏆 Trader Success Story: From Zero to Funded
            </h5>
              <SuccessStories />
       
      </div>
    </div>
  );
}

export default SuccessStory;
