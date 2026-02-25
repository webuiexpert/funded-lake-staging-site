import { useState } from "react";
import { motion } from "framer-motion";


function FutureFaqLists({ searchTerm }) {
    const faqs = [
        {
            question:
                "What are the requirements to request a payout?",
            answer: (
                <div className="space-y-4 text-white text-[16px] text-left leading-relaxed">
                    <ul className="list-disc list-inside">
                        <li>
                            To request a payout, traders must complete 4 separate trading days with at least $200+ profit per day.
                        </li>
                        <li>
                            This applies to all account types.
                        </li>
                        <li>
                            Each qualifying day must be an individual trading day.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            question: "What happens to my drawdown after I request a payout?",
            answer: (
                <div className="space-y-4 text-white text-[16px] text-left leading-relaxed">
                    <p>
                        When a payout is processed, the account drawdown resets back to the initial balance level.
                    </p>
                    <p>
                        This means any buffer you built is removed.
                    </p>
                    <p>
                        We strongly recommend leaving a sufficient buffer in your account before requesting a payout, as the reset could cause a breach if there is not enough equity remaining.
                    </p>
                </div>
            ),
        },
        {
            question: "Is there a payout cap?",
            answer: (
                <div className="space-y-4 text-white text-[16px] text-left leading-relaxed">
                    <p>
                        <span className="font-bold text-orange-500">Yes</span>
                    </p>
                    <p>The maximum payout per account, per payout request, is $3,000.</p>
                    <p>This applies to all programs.</p>
                </div>
            ),
        },
        {
            question: "How many funded accounts can I have at the same time?",
            answer: (
                <div className="space-y-4 text-white text-[16px] text-left leading-relaxed">
                    <p>Traders can have a maximum of 4 active funded accounts at the same time.</p>
                </div>
            ),
        },
        {
            question: "What is EOD Trailing Drawdown and how does it work?",
            answer: (
                <div className="space-y-4 text-white text-[16px] text-left leading-relaxed">
                    <p>
                        EOD (End of Day) Trailing Drawdown means your maximum loss level adjusts at the end of each trading day based on your highest closed balance of that day.
                    </p>
                    <p>It does not move intraday. It only updates after the trading day closes.</p>
                    <p>
                        <span className="font-bold text-orange-500">Example:</span>
                        You start with $50,000 and a $2,000 trailing drawdown.
                    </p>
                    <p>Your minimum equity allowed is initially $48,000.</p>
                    <p>If at the end of the trading day your closed balance is $52,000, your new minimum equity becomes $50,000 (because $52,000 minus $2,000 = $50,000).</p>
                    <p>The drawdown trails upward as your balance increases, but it never trails downward.</p>
                </div>
            ),
        },
        {
            question:
                " What is the 40% Consistency Rule?",
            answer: (
                <div className="space-y-4 text-white text-[16px] text-left leading-relaxed">
                    <p>
                        The 40% consistency rule means that your largest trading day cannot exceed 40% of your total profit at the time you request a payout.
                    </p>
                    <p>This ensures profits are generated consistently and not from a single oversized trade.</p>
                    <p>
                        <span className="font-bold text-orange-500">Example: </span>
                        If you made $5,000 total profit, your biggest trading day cannot be more than $2,000 (40% of $5,000).
                    </p>
                    <p>
                        If one day was $2,500 profit, you would need to continue trading to balance your performance before requesting payout.
                    </p>
                </div>
            ),
        },
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-bg-col p-10 rounded-2xl mt-6 max-w-4xl mx-auto">
            <motion.h3
                className="md:leading-[1.1em] font-bold text-left title-font mb-8 uppercase text-4xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.4 }} //
            >
                <span className="text-[var(--primary-color)]">FUTUTERS</span>
            </motion.h3>
            <div className="space-y-4 ">
                {filteredFaqs.map((faq, index) => (
                    <div className="bg-[#000b1f] p-4 rounded-2xl" key={index}>
                        <button
                            onClick={() => toggle(index)}
                            className="w-full cursor-pointer flex justify-between items-center text-left"
                        >
                            <span className="text-white font-semibold text-[18px]">{faq.question}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-3 py-4 text-[16px] whitespace-pre-line text-gray-300">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FutureFaqLists;
