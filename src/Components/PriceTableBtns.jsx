import PrimaryButton from './PrimaryButton'
import { FaFire } from "react-icons/fa6";


function PriceTableBtns({ oldAmount, newAmount, accountAmt, getFundedLink, hideHeading, goalDiscount, couponCode }) {
  return (
    <div className="headingContainer md:mt-12 mt-8 flex flex-col items-center justify-center md:gap-10 gap-8">
        <button
        className="
          inline-flex items-center gap-2
          px-5 py-2
          rounded-full
          font-semibold text-white
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
          border border-yellow-300
          shadow-lg
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(251,191,36,1)]
          transition-all duration-300
        "
      >
        <FaFire className="text-lg" />
        {goalDiscount} OFF
      </button>

      {/* Hide Heading Conditionally */}
      {!hideHeading && (
        <h3 className="text-center lg:text-6xl md:text-4xl text-[32px] font-bold text-[var(--primary-color)]">
          <span className="text-gray-500 line-through ">{oldAmount}</span> for <span>{newAmount}</span>
          <span className="text-white"> {accountAmt} </span> Account
        </h3>
      )}
   <p className="text-center text-lg md:text-2xl font-medium text-gray-300">
        ⏳ Limited time offer | Use code  <span className="font-bold text-yellow-400">
          {couponCode}
        </span>
      </p>
      <div className="flex md:flex-row flex-col md:gap-6 gap-4">
        <PrimaryButton text="GET FUNDED" link={getFundedLink} />
      </div>

    </div>
  )
}

export default PriceTableBtns