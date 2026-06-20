import { X } from "lucide-react";
import { useState } from "react";
import CopyCouponButton from "./CopyCouponButton";

function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-70 w-full bg-[var(--primary-color)] flex flex-col justify-center items-center gap-y-2 pt-[2px] px-4 md:px-6">
      <X
        onClick={() => setVisible(false)}
        className="text-white size-6 md:size-7 absolute md:top-4 border rounded-full p-1 top-1 right-1 md:right-24 cursor-pointer"
        aria-label="Close promo" />
      <div className="flex flex-col gap-3 text-white text-center py-3">

  <div className="flex items-center gap-4 justify-center">
    <p className="text-[14px] md:text-xl lg:text-xl font-medium">
      Use code <strong>GOAL25</strong> for 25% OFF Instant Funding
    </p>

    <div onClick={() => navigator.clipboard.writeText("GOAL25")}>
      <CopyCouponButton couponCode="GOAL25" />
    </div>
  </div>

  <div className="flex items-center gap-4 justify-center">
    <p className="text-[14px] md:text-xl lg:text-xl font-medium">
      Use code <strong>GOAL40</strong> for 40% OFF All challenges
    </p>

    <div onClick={() => navigator.clipboard.writeText("GOAL40")}>
      <CopyCouponButton couponCode="GOAL40" />
    </div>
  </div>

</div>
    </div>
  );
}

export default TopBar;
