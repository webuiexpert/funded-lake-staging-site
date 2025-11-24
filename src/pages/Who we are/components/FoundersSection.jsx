import botSep from "/assets/bot-saprator.jpg";
import { motion } from "framer-motion";
import chrisImg from "/assets/founders-imgs/chris-image.png"
import makImg from "/assets/founders-imgs/mak-image.png"
import marounImg from "/assets/founders-imgs/maroun-image.png"
import { useState } from "react";

function FoundersSection() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const foundersData = [
        {
            image: chrisImg,
            title: "Chris Mogab",
            subtitle: "Co Founder and CEO, FundedLake",
            description: "Chris is a professional trader and entrepreneur with over seven years of hands on experience in the trading and prop firm industry. His journey began as a retail trader facing the same challenges most traders deal with today, which gave him a deep understanding of risk management, psychology, and the consistency required to perform in high pressure market conditions.After working with multiple prop firms and funding setups, Chris identified a clear gap in transparency and trader support. That became the foundation for FundedLake. His vision is to build a firm that truly puts traders first, with clear rules, fast payouts, and a model built around real performance instead of unrealistic traps.Chris is actively involved in the day to day growth of FundedLake, from strategy and partnerships to community engagement and product development, making sure the brand always stays aligned with its core purpose, creating real opportunities for serious traders.",
        },
        {
            image: makImg,
            title: "Mak (Makram) Demian",
            subtitle: "Co-Founder & Head of Finance",
            description: "With over a decade of experience in finance and as a certified accountant across the U.S. and international markets, Mak Demian brings operational precision and financial stewardship to the foundation of FundedLake. Mak’s career spans diverse finance roles across Nigeria, Lebanon, and the United States, where he led budgeting, forecasting, and performance analytics for large-scale operations. Known for his continuous-improvement mindset and data-driven approach, Mak has built systems that optimize performance, strengthen accountability, and drive sustainable growth. Beyond numbers, Mak is recognized for his integrity, leadership, and ability to turn complexity into clarity. His versatility and cross-cultural experience have earned him a reputation for reliability, flexibility, and trust; qualities that define both his professional ethos and his management style. At FundedLake, Mak leads commercial operations, financial strategy, and infrastructure, ensuring that every trader operates within a solid, transparent, and sustainable framework. His mission is simple yet powerful: to build a prop firm that runs with institutional discipline, transparent processes, and a genuine human connection at its core. ",
        },
        {
            image: marounImg,
            title: "Maroun Rajeh",
            subtitle: "Co-Founder and Growth Lead",
            description: "As a co founder of FundedLake, Maroun focuses on scaling the brand, shaping the vision, and strengthening the relationship between the company and its global trading community. With a background in engineering, marketing, community building, and trader engagement, he bridges strategy with execution to drive FundedLake’s growth across social platforms, partnerships, and user experience. Maroun is known for turning ideas into momentum, building systems, creating content direction, and ensuring the message behind FundedLake stays authentic, clear, and aligned with what traders truly need. His approach blends creativity with discipline, aiming to build a prop firm that grows through transparency, consistency, and a real human connection. At FundedLake, Maroun leads growth strategy, marketing operations, and community development, making sure the company stays true to its mission of empowering traders and building a brand people genuinely trust.",
        }
    ];

    return (
        <div className='md:pt-4 md:pb-14 md:py-0 py-10'>
            <motion.h2
                className="text-center mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <span className="text-white">Meet the </span> Founders
            </motion.h2>
            <div className="founders-box md:max-w-6xl mx-auto md:mt-10 md:mb-16 mt-10 lg:px-0 px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid md:grid-cols-3 lg:gap-8 md:gap-4 gap-y-8 text-center">
                    {foundersData.map((itemData, index) => {
                        const isOpen = expandedIndex === index;

                        return (
                            <motion.div
                                variants={item}
                                key={index}
                                className="works-col flex flex-col items-center justify-start space-y-4 bg-[#0f1021] p-8 rounded-xl hover:scale-105 duration-200 relative radial-bg shadow-xl"
                            >
                                {/* Image */}
                                <div className="founders-gradient-border overflow-hidden p-[5px] lg:size-[210px] md:size-[180px] size-[170px] rounded-full">
                                    <span
                                        className="founder-img w-full h-full rounded-full"
                                        style={{ backgroundImage: `url(${itemData.image})` }}
                                    ></span>
                                </div>

                                <div className="space-y-4 mt-4 text-center">
                                    <h5 className="lg:text-[28px] md:text-2xl text-lg uppercase font-semibold text-white">
                                        {itemData.title}
                                    </h5>

                                    <p className="text-sm text-gray-400 uppercase">
                                        {itemData.subtitle}
                                    </p>

                                    {/* Description with smooth animation */}
                                    <motion.p
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: isOpen ? "auto" : 66,
                                            opacity: 1
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="text-gray-300 overflow-hidden"
                                    >
                                        {itemData.description}
                                    </motion.p>

                                    {/* Toggle Button */}
                                    <button
                                        onClick={() =>
                                            setExpandedIndex(isOpen ? null : index)
                                        }
                                        className="text-blue-400 font-medium mt-2 hover:underline cursor-pointer"
                                    >
                                        {isOpen ? "Read Less" : "Read More..."}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}


                </motion.div>
            </div>

            <img src={botSep} alt="" className="mx-auto mt-10" />
        </div>
    );
}

export default FoundersSection;
