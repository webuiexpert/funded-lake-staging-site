import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"
import { motion } from "framer-motion";
import SuccessStories from "./SuccessStories";
import SuccessStoriesSlider from "./SuccessStoriesSlider";


function SuccessStory() {
  return (
    <div className="lg:py-16 md:py-10 lg:px-0 px-4 py-10 relative">
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
        <span className="text-white">trader's </span>success story
      </motion.h2>

     <SuccessStoriesSlider/>
    </div>
  );
}

export default SuccessStory;
