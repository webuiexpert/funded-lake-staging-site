import { useEffect, useState } from "react";
import { X } from "lucide-react";
import popupImg100 from "/assets/popupImg-100k.png";
import PrimaryButton from "./PrimaryButton";
import CopyCouponButton from "./CopyCouponButton";
import axios from "axios";

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Show popup after small delay
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Use your actual domain URL
      const response = await axios.post('https://fundedlake.com/api/subscribe.php', {
        email
      });

      if (response.data.success) {
        setEmail("");
        setMessage("🎉 Subscription successful! Check your inbox.");
      } else {
        setEmail("");
        setMessage("❌ Error: " + response.data.message);
      }
    } catch (error) {
      setEmail("");
      setMessage("❌ Error: " + (error.response?.data?.message || "Failed to subscribe"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
    onClick={() => setShow(null)}
>
      <div className="email-popup-col relative bg-white text-white w-full overflow-y-auto lg:max-w-4xl px-4 py-6 lg:py-8 md:px-6 rounded-lg shadow-lg text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      onClick={(e) => e.stopPropagation()}
>
        {/* ❌ Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-4xl font-bold cursor-pointer"
          onClick={() => setShow(false)}
        >
          <X className="bg-primary rounded-full p-1 md:size-7 size-6" />
        </button>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-start">
          <img
            className="border-2 md:w-full w-[60%] md:mx-0 mx-auto rounded-lg"
            src={popupImg100}
            alt="Popup Giveaway"
          />

          <div className="popupContent text-start flex flex-col justify-around">
            <h3 className="font-semibold md:text-[24px] text-[20px] text-center md:text-left">
              ⚡ WIN A FREE 100k 2-STEP CHALLENGE GIVEAWAY ⚡
            </h3>
            <p className="md:text-[18px] mt-4 text-center md:text-left">
              Enter your email and join our Discord for a chance to win a 100k
              2-Step challenge account. Winner will be announced on Discord!
            </p>

            {/* ✅ Subscription Form */}
            <form className="mt-5 mb-6" onSubmit={handleSubmit}>
              <div className="flex gap-3 border p-1 rounded-[10px] bg-[#2a2a2a]">
                <input
                  className="w-full px-2 bg-transparent text-white focus:outline-0 placeholder-gray-400"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[var(--primary-color)] px-4 py-2 rounded-md cursor-pointer disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
              </div>
            </form>

            {message && (
              <p className="text-center my-2 text-sm text-gray-300">{message}</p>
            )}

            {/* ✅ Action Buttons */}
            <div className="contact-btns md:gap-5 gap-4 flex flex-col justify-start md:items-start lg:mt-0 mt-2">
              <PrimaryButton
                text="JOIN OUR DISCORD"
                link="https://discord.gg/vDSnjmxndy"
              />
              <div className="flex md:items-start items-center gap-4 text-white text-left  flex-col relative">
                <p className="text-[14px] md:text-sm font-medium max-w-[350px] md:max-w-none">
                  CHRISTMAS OFFER: Use code MERRY30 for 30% off any program
                </p>
                <div onClick={() => navigator.clipboard.writeText("MERRY30"
                )}>
                  <CopyCouponButton couponCode="MERRY30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;