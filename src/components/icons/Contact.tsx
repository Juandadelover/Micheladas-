const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M12 21.5s7-6.4 7-12A7 7 0 105 9.5c0 5.6 7 12 7 12z" />
      <circle cx="12" cy="9.4" r="2.4" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M6.6 3.5h2.7l1.4 4.3-2 1.7a11.3 11.3 0 005.8 5.8l1.7-2 4.3 1.4v2.7a1.5 1.5 0 01-1.6 1.5A16.5 16.5 0 015.1 5.1a1.5 1.5 0 011.5-1.6z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
