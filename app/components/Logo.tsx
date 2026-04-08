export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 40"
        className="w-10 h-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="auroraGrad" x1="0" y1="20" x2="64" y2="20">
            <stop offset="0%" stopColor="#2E3192" />
            <stop offset="30%" stopColor="#5B8DEF" />
            <stop offset="55%" stopColor="#7B5BE6" />
            <stop offset="80%" stopColor="#4FD1D9" />
            <stop offset="100%" stopColor="#C56BE6" />
          </linearGradient>
        </defs>
        {/* swoosh trails */}
        <path
          d="M2 28 Q 20 14, 40 18 T 60 8"
          stroke="url(#auroraGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 32 Q 22 20, 42 24 T 58 14"
          stroke="url(#auroraGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M4 36 Q 24 26, 44 30 T 56 20"
          stroke="url(#auroraGrad)"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* plane */}
        <path
          d="M56 6 L62 2 L60 10 L56 8 L54 12 L52 10 L56 6 Z"
          fill="#1E1433"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-xl tracking-tight text-aurora-800">
          AURORA TRIP
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-aurora-500 font-medium mt-0.5">
          Private & Corporate Travel
        </span>
      </div>
    </div>
  );
}
