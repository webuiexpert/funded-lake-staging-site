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
      <div className="flex items-center gap-4 text-white text-center md:flex-row flex-col relative py-3">
        <p className="text-[14px] md:text-xl lg:text-xl font-medium max-w-[350px] md:max-w-none">
          CODE TRADE10 for 10% off any program
        </p>
        <div onClick={() => navigator.clipboard.writeText("TRADE10"
              )}>
            <CopyCouponButton couponCode="TRADE10" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
