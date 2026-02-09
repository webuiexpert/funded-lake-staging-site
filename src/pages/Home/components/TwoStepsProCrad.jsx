import PhaseCard from "./PhaseCard";
import phaseBgBlackImg from "/assets/black-abstract-bg.png";
import phaseBgBlueImg from "/assets/blue-bg-light.png";


function TwoStepsProCrad() {
  const onephase = [
    { label: "Profit Target", value: "8%", description: "8% target of initial balance"},
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based on current day balance" },
    { label: "Max Drawdown", value: "7%", description: "Equity-based, does not trail (Hard Breach)"},
    // { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)"},
    { label: "Leverage", value: "1:50"},
    { label: "Minimum Trading Days", value: "-", description: "None"},
    { label: "Profit Split", value: "-", description: "-"},
    { label: "Lock upon payout", value: "Yes", description: "Check faqs for more details about lock upon payout"},
  ];

  const secondphase = [
    { label: "Profit Target", value: "5%", description: "5% target of initial balance" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based on current day balance" },
    { label: "Max Drawdown", value: "7%", description: "Equity-based, does not trail (Hard Breach)"},
    // { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50"},
    // { label: "Max Time", value: "-", description: "Max Time requirements" },
    { label: "Minimum Trading Days", value: "-", description: "None"},
    { label: "Profit Split", value: "-", description: "-" },
    { label: "Lock upon payout", value: "Yes", description: "Check faqs for more details about lock upon payout" },
  ];

  const fundedSteps = [
    { label: "Profit Target", value: "-", description: "Funded account has no profit limit" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based on current day balance" },
    { label: "Max Drawdown", value: "7%", description: "Equity-based, does not trail (Hard Breach)"},
    // { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50"},
    // { label: "Max Time", value: "-", description: "Max Time requirements" },
    { label: "Minimum Trading Days", value: "-", description: "None"},
    { label: "Profit Split", value: "-", description: "Up to 90%" },
    { label: "Lock upon payout", value: "-", description: "Check faqs for more details about lock upon payout" },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 lg:w-[100%] mx-auto">
      <PhaseCard title="PHASE ONE" highlight="text-[#00AEEF]" steps={onephase} bgImg={phaseBgBlackImg} />
      <PhaseCard title="PHASE TWO" highlight="text-[#00AEEF]" steps={secondphase}  bgImg={phaseBgBlackImg} />
      <PhaseCard title="FUNDED" highlight="text-white" steps={fundedSteps}  bgImg={phaseBgBlueImg} titleColor="text-white" borderColor="border-white" />
    </div>
  );
}

export default TwoStepsProCrad;
