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
        stroke="#198754" 
        strokeWidth="10" 
        fill="none"
      />
      <path 
        d="M50 20 C45 20, 40 25, 40 30 C40 35, 45 40, 50 40 C55 40, 60 35, 60 30 C60 25, 55 20, 50 20 Z" 
        fill="#198754"
      />
      <path 
        d="M25 60 C25 55, 30 50, 35 50 L40 50 C40 55, 40 60, 40 65 C40 70, 35 75, 30 75 C25 75, 20 70, 20 65 C20 62.5, 22.5 60, 25 60 Z" 
        fill="#198754"
      />
      <path 
        d="M75 60 C75 55, 70 50, 65 50 L60 50 C60 55, 60 60, 60 65 C60 70, 65 75, 70 75 C75 75, 80 70, 80 65 C80 62.5, 77.5 60, 75 60 Z" 
        fill="#198754"
      />
      <rect 
        x="48" 
        y="40" 
        width="4" 
        height="40" 
        fill="#198754"
      />
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