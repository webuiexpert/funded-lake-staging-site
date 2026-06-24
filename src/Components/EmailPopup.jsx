import { useEffect, useState } from "react";
import { X, Copy, Check, Zap } from "lucide-react";
import popupImg100 from "/assets/popupImg-100k.png";
import axios from "axios";

function CouponButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 border border-dashed border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-colors rounded-lg px-4 py-2 text-sm font-semibold tracking-widest w-full justify-between"
    >
      <span>{code}</span>
      {copied ? (
        <Check size={15} className="text-green-400" />
      ) : (
        <Copy size={15} />
      )}
    </button>
  );
}

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post("https://fundedlake.com/api/subscribe.php", { email });
      if (response.data.success) {
        setEmail("");
        setMessage({ type: "success", text: "Subscription successful! Check your inbox." });
      } else {
        setEmail("");
        setMessage({ type: "error", text: response.data.message || "Something went wrong." });
      }
    } catch (error) {
      setEmail("");
      setMessage({ type: "error", text: error.response?.data?.message || "Failed to subscribe." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999999999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "#111113", maxHeight: "calc(100vh - 2rem)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button — top-right of popup */}
        <button
          onClick={() => setShow(false)}
          aria-label="Close popup"
          className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          style={{ width: 32, height: 32 }}
        >
          <X size={16} color="white" />
        </button>

        <div className="flex flex-col md:flex-row overflow-y-auto" style={{ maxHeight: "calc(100vh - 2rem)" }}>
          {/* Left — Image panel */}
          <div
            className="flex flex-col items-center justify-center gap-5 p-6 md:p-8 md:w-[42%] shrink-0"
            style={{ background: "#0e0e10", borderRight: "1px solid rgba(255,255,255,0.07)" }}
          >
            <img
              src={popupImg100}
              alt="100k Giveaway"
              className="rounded-xl w-full max-w-[220px] md:max-w-full object-cover"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <a
              href="https://discord.gg/vDSnjmxndy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-semibold text-sm rounded-xl px-5 py-3 w-full justify-center transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#5865F2", color: "#fff" }}
            >
              {/* Discord icon via SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.102 18.08.114 18.1.135 18.115a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              JOIN OUR DISCORD
            </a>
          </div>

          {/* Right — Content panel */}
          <div className="flex flex-col justify-center gap-5 p-6 md:p-8 flex-1">
            {/* Heading */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-yellow-400" fill="currentColor" aria-hidden="true" />
                <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Giveaway</span>
              </div>
              <h3 className="text-[#00c4f4] uppercase font-bold text-xl md:text-2xl lg:text-3xl leading-snug">
                Win a FREE 100k 2-Step Challenge
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Enter your email and join our Discord for a chance to win a 100k 2-Step challenge account. Winner announced on Discord!
              </p>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit}>
              <div
                className="flex rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "#1a1a1d" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent text-white text-sm px-4 py-3 focus:outline-none placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Subscribe"
                  className="shrink-0 px-4 py-3 text-sm font-semibold transition-all hover:brightness-110 active:scale-95 disabled:opacity-60 flex items-center justify-center"
                  style={{ background: "var(--primary-color, #e8a020)", color: "#000", minWidth: 44 }}
                >
                  {loading ? (
                    /* spinner — visible at all sizes */
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  ) : (
                    <>
                      {/* Send icon — always visible on mobile, hidden on sm+ */}
                      <svg className="block sm:hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      {/* Text — hidden on mobile, visible on sm+ */}
                      <span className="hidden sm:inline">Subscribe</span>
                    </>
                  )}
                </button>
              </div>

              {message && (
                <p
                  className="mt-2 text-xs px-1"
                  style={{ color: message.type === "success" ? "#4ade80" : "#f87171" }}
                >
                  {message.type === "success" ? "🎉" : "❌"} {message.text}
                </p>
              )}
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-gray-500 text-xs">exclusive discounts</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Coupons */}
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-gray-400 text-xs mb-1.5">
                  25% OFF Instant Funding
                </p>
                <CouponButton code="GOAL25" />
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1.5">
                  40% OFF All Challenges
                </p>
                <CouponButton code="GOAL40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;