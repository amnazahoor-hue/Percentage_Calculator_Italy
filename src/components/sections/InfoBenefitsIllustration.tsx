import { cn } from "@/lib/cn";

export function InfoBenefitsIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("info-benefits-illustration", className)} aria-hidden="true">
      <svg
        className="info-benefits-illustration-svg"
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="infoCalcBody" x1="80" y1="40" x2="280" y2="260">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="55%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#4338CA" />
          </linearGradient>
          <linearGradient id="infoCalcScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EEF1FF" />
            <stop offset="100%" stopColor="#E0E7FF" />
          </linearGradient>
          <linearGradient id="infoCalcTrail" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF7A45" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#FF7A45" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.35" />
          </linearGradient>
          <filter id="infoCalcShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#4F46E5"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        <ellipse cx="200" cy="292" rx="120" ry="18" fill="#C7D2FE" opacity="0.35" />

        <path
          d="M48 300 C90 250, 130 220, 175 195 C210 175, 235 155, 255 130"
          stroke="url(#infoCalcTrail)"
          strokeWidth="42"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M48 300 C90 250, 130 220, 175 195 C210 175, 235 155, 255 130"
          stroke="#FF7A45"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.35"
        />

        <g filter="url(#infoCalcShadow)" transform="rotate(-18 200 150)">
          <rect
            x="118"
            y="58"
            width="164"
            height="196"
            rx="28"
            fill="url(#infoCalcBody)"
          />
          <rect
            x="134"
            y="78"
            width="132"
            height="44"
            rx="12"
            fill="url(#infoCalcScreen)"
            stroke="#C7D2FE"
            strokeWidth="1.5"
          />
          <text
            x="200"
            y="108"
            textAnchor="middle"
            fill="#4F46E5"
            fontSize="22"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            25%
          </text>

          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={138 + col * 42}
                y={136 + row * 34}
                width="34"
                height="26"
                rx="8"
                fill="white"
                fillOpacity={row === 2 && col === 2 ? 0.95 : 0.22}
              />
            ))
          )}

          <rect
            x="138"
            y="242"
            width="124"
            height="28"
            rx="10"
            fill="#FF7A45"
            fillOpacity="0.92"
          />
        </g>

        <circle cx="286" cy="72" r="22" fill="#EEF1FF" stroke="#C7D2FE" strokeWidth="2" />
        <text
          x="286"
          y="80"
          textAnchor="middle"
          fill="#4F46E5"
          fontSize="20"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          %
        </text>

        <circle cx="92" cy="118" r="6" fill="#A5B4FC" opacity="0.7" />
        <circle cx="310" cy="210" r="4" fill="#FF7A45" opacity="0.55" />
        <circle cx="68" cy="196" r="5" fill="#C7D2FE" opacity="0.8" />
      </svg>
    </div>
  );
}
