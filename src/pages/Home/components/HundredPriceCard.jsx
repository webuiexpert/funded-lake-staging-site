import { useState } from "react";
import { Info } from "lucide-react";
import PriceTableBtns from "../../../Components/PriceTableBtns";

function HundredPriceCard() {
   const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (idx) => {
    setActiveTooltip((prev) => (prev === idx ? null : idx));
  };

  const evaluationSteps = [
    { label: "Profit Target", value: "6000", description: "" },
    { label: "Max Loss Limit", value: "3000", description: "" },
    { label: "Daily Loss", value: "None", description: "" },
    { label: "Activation Fee", value: "None" }, // no description
    { label: "Consistency Rule", value: "40%", description: ""},
    { label: "News Trending", value: "Yes", description: "" },
    { label: "Max Contract Size", value: "8 Mins", description: "" },
    { label: "Profit Split", value: "-", description: "" },
  ];

  const fundedSteps = [
    { label: "Profit Target", value: "None", description: "" },
    { label: "Max Loss Limit", value: "3000", description: "" },
    { label: "Daily Loss", value: "None", description: "" },
    { label: "Activation Fee", value: "$120" }, // no description
    { label: "Consistency Rule", value: "40%", description: ""},
    { label: "News Trending", value: "No", description: "" },
    { label: "Max Contract Size", value: "4 Mins", description: "" },
    { label: "Profit Split", value: "80%", description: "" },
  ];

  const renderStepList = (steps, offset = 0) =>
    steps.map((step, idx) => {
      const index = idx + offset;
      const hasDescription = !!step.description;

      return (
        <li key={index} className="relative flex items-start justify-between gap-10">
          <div className="labels flex items-center justify-between w-[45%] text-sm gap-2 text-white">
            {step.label}
            {hasDescription ? (
              <button onClick={() => handleTooltipToggle(index)} className="relative group focus:outline-none">
                <Info className="size-5 text-gray-300 cursor-pointer" />
                {activeTooltip === index && (
                  <div className="absolute z-50 -top-[50px] -left-[60px] bg-white font-normal w-56 px-3 text-black text-xs rounded p-2 shadow">
                    {step.description}
                  </div>
                )}
              </button>
            ) : (
              <Info className="size-5 text-gray-600 opacity-30 cursor-not-allowed" />
            )}
          </div>
          <div className="values text-sm text-white">{step.value}</div>
        </li>
      );
    });

  return (
    <div>
      <div className="phase-box grid md:grid-cols-2 grid-cols-1 gap-6 mt-12 lg:w-[100%] mx-auto">
        {/* Evaluation */}
        <div className="evalution-phase rounded-[40px] flex flex-col justify-start items-start bg-dark md:px-8 md:py-12 px-6 py-10">
          <h3 className="lg:text-[27px] text-2xl font-extrabold mb-4 uppercase">
            <span className="text-[#0062e5]">Evaluation</span> Phase
          </h3>
          <hr className="bg-blue-900 border border-primary h-[1px] w-full my-8" />
          <ul className="flex w-full flex-col gap-6">
            {renderStepList(evaluationSteps, 0)}
          </ul>
        </div>

        {/* Funded */}
        <div className="funded rounded-[40px] flex flex-col justify-start items-start md:px-8 md:py-12 px-6 py-10">
          <h3 className="lg:text-[27px] text-2xl font-extrabold mb-4 uppercase">
            <span className="text-white">FUNDED</span>
          </h3>
          <hr className="bg-white border border-white h-[1px] w-full my-8" />
          <ul className="flex w-full flex-col gap-6">
            {renderStepList(fundedSteps, evaluationSteps.length)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HundredPriceCard