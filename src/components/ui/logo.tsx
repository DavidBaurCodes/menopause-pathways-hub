import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 32 }: LogoProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="#237f52" 
        strokeWidth="10" 
        fill="white"
      />
      {/* Top leaf/drop */}
      <path 
        d="M50 15 C45 15, 40 20, 40 27 C40 34, 45 40, 50 40 C55 40, 60 34, 60 27 C60 20, 55 15, 50 15 Z" 
        fill="#237f52"
      />
      {/* Left leaf */}
      <path 
        d="M20 45 C20 38, 25 33, 32 33 C39 33, 45 38, 45 45 C45 52, 40 57, 33 57 C26 57, 20 52, 20 45 Z" 
        fill="#237f52"
      />
      {/* Right leaf */}
      <path 
        d="M80 45 C80 38, 75 33, 68 33 C61 33, 55 38, 55 45 C55 52, 60 57, 67 57 C74 57, 80 52, 80 45 Z" 
        fill="#237f52"
      />
      {/* Stem */}
      <rect 
        x="47" 
        y="40" 
        width="6" 
        height="35" 
        fill="#237f52"
      />
      {/* Bottom horizontal line */}
      <rect 
        x="35" 
        y="72" 
        width="30" 
        height="6" 
        fill="#237f52"
      />
    </svg>
  );
};

// Custom Health Icons
export const LeafIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M12 2 C8 2, 5 5, 5 9 C5 13, 8 16, 12 16 C16 16, 19 13, 19 9 C19 5, 16 2, 12 2 Z M12 4 C15 4, 17 6, 17 9 C17 12, 15 14, 12 14 C9 14, 7 12, 7 9 C7 6, 9 4, 12 4 Z" 
        fill="currentColor"
      />
      <path d="M12 16 L12 22 M10 18 L14 18 M9 20 L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export const HealthCareIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5"/>
      <path 
        d="M2 20c2-2 4-1 6 0M22 20c-2-2-4-1-6 0" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export const FitnessIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M6.5 6.5h.01M17.5 6.5h.01M6.5 17.5h.01M17.5 17.5h.01" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      <path 
        d="M6.5 10.5v3M17.5 10.5v3M10.5 6.5v11M13.5 6.5v11M10.5 12h3" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export const HeartSearchIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M16.84 7.61a3.5 3.5 0 0 0-4.95 0L11.5 8l-.39-.39a3.5 3.5 0 0 0-4.95 4.95l.39.39L11.5 17.5l2-2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="18.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
      <path d="m20.5 18.5 1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export const HeartPulseIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M3.22 12h3.14l.63-1.25L8.72 15l1.73-3.44L12.18 12h3.4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NutritionIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M12 20.5c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M10 2v2M14 2v2M8 7l1 1M16 7l-1 1" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
      <path d="m18.5 18.5 1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export const LegalIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <rect x="3" y="2" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 6h4M7 10h8M7 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path 
        d="M15 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path d="M17 18h2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export const FinanceIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 15h.01M11 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path 
        d="M12 8c-.83 0-1.5-.67-1.5-1.5S11.17 5 12 5s1.5.67 1.5 1.5S12.83 8 12 8z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path d="M12 8v3M10 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export const CommunityIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M23 21v-1a3 3 0 0 0-3-3h-1" stroke="currentColor" strokeWidth="2"/>
      <circle cx="21" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
};

export const HeartGearIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 5v6M9 8h6" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
};

export const DocumentEditIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14 2v6h6M16 13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path 
        d="M15 14l2 2M17 14l-2 2" 
        stroke="currentColor" 
        strokeWidth="1"
      />
    </svg>
  );
};

export const ChartPlusIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M3 3v18h18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M18 9l-5 5-4-4-3 3" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="19" 
        cy="5" 
        r="2" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      <path 
        d="M19 3v4M17 5h4" 
        stroke="currentColor" 
        strokeWidth="1"
      />
    </svg>
  );
};

export const HeartChatIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path 
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16.84 7.61a3.5 3.5 0 0 0-4.95 0L11.5 8l-.39-.39a3.5 3.5 0 0 0-4.95 4.95l.39.39L11.5 17.5l4.95-4.95.39-.39a3.5 3.5 0 0 0 0-4.95z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GiftHandsIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <polyline 
        points="20,12 20,22 4,22 4,12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <rect 
        x="2" 
        y="7" 
        width="20" 
        height="5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <line 
        x1="12" 
        y1="22" 
        x2="12" 
        y2="7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M2 20c2-2 4-1 6 0M22 20c-2-2-4-1-6 0" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
};