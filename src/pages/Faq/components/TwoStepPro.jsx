import { useState } from "react";
import { motion } from "framer-motion";

function TwoStepPro({ searchTerm }) {
  const faqs = [
    {
      question: "Is there a breach for inactivity?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days.</p>
        </div>
      ),
    },
    {
      question: "How does lock upon payout work?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            A trader has a $100,000 account and grows the balance to $110,000. When the trader submits a payout request, the maximum drawdown becomes permanently locked at the original starting balance of $100,000. From that point forward, the account balance may not fall below $100,000. If it does, the account will be considered breached.
It is recommended for the trader to keep a buffer when requesting a payout in this program.

          </p>
        </div>
      ),
    },

    {
      question:
        "How do you calculate the maximum drawdown",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            Maximum drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Maximum Drawdown is set at 7% of your starting balance. This 7% is static and does not trail until the lock upon payout takes place  after the payout.
           </p>
        </div>
      ),
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-bg-col p-10 rounded-2xl mt-6 max-w-4xl mx-auto">
      <motion.h3
        className="md:leading-[1.1em] font-bold title-font mb-8 uppercase text-4xl text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }} //
      >
        <span className="text-[var(--primary-color)]">2-step</span> Pro
        QUESTIONS
      </motion.h3>
      <div className="space-y-4 ">
        {filteredFaqs.map((faq, index) => (
          <div className="bg-[#000b1f] p-4 rounded-2xl" key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full cursor-pointer flex justify-between items-center text-left"
            >
              <span className="text-white font-semibold text-[18px]">
                {faq.question}
              </span>
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

export default TwoStepPro;
