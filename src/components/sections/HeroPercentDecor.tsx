import { cn } from "@/lib/cn";

export function HeroPercentDecor({ className }: { className?: string }) {
  return (
    <div className={cn("hero-percent-decor", className)} aria-hidden="true">
      <span className="hero-percent-decor-glow" />

      <div className="hero-percent-decor-card">
        <svg
          className="hero-percent-decor-svg"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroPctBg" x1="0" y1="0" x2="120" y2="120">
              <stop offset="0%" stopColor="#EEF1FF" />
              <stop offset="100%" stopColor="#E8EAFF" />
            </linearGradient>
            <linearGradient id="heroPctCircle" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="heroPctSlash" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            <filter id="heroPctShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="6"
                floodColor="#4F46E5"
                floodOpacity="0.28"
              />
            </filter>
          </defs>

          <rect
            x="4"
            y="4"
            width="112"
            height="112"
            rx="28"
            fill="url(#heroPctBg)"
            stroke="#D4D8F8"
            strokeWidth="1.5"
          />

          <circle
            cx="42"
            cy="38"
            r="18"
            fill="url(#heroPctCircle)"
            filter="url(#heroPctShadow)"
          />
          <circle
            cx="42"
            cy="38"
            r="11"
            fill="white"
            fillOpacity="0.22"
          />

          <circle
            cx="78"
            cy="82"
            r="18"
            fill="url(#heroPctCircle)"
            filter="url(#heroPctShadow)"
          />
          <circle
            cx="78"
            cy="82"
            r="11"
            fill="white"
            fillOpacity="0.18"
          />

          <path
            d="M88 22 L32 98"
            stroke="url(#heroPctSlash)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M88 22 L32 98"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.35"
          />

          <circle cx="42" cy="38" r="5" fill="white" fillOpacity="0.9" />
          <circle cx="78" cy="82" r="5" fill="white" fillOpacity="0.9" />
        </svg>
      </div>

      <svg
        className="hero-percent-decor-star hero-percent-decor-star--1"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.5L12 15.8 6.4 19.3l2.1-6.5L3 8.8h6.8L12 2z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="hero-percent-decor-star hero-percent-decor-star--2"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 1l1.6 4.9H16l-4 2.9 1.5 4.6L10 12.5 6.5 13.4 8 8.8 4 5.9h4.4L10 1z"
          fill="currentColor"
        />
      </svg>
      <span className="hero-percent-decor-dot hero-percent-decor-dot--1" />
      <span className="hero-percent-decor-dot hero-percent-decor-dot--2" />
    </div>
  );
}
