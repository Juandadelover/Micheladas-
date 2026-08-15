const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DeliveryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <circle cx="6" cy="18" r="2.3" />
      <circle cx="17.5" cy="18" r="2.3" />
      <path d="M8.2 18h7" />
      <path d="M3 15.5l1.6-4.3a1 1 0 01.94-.65h3.4l2.6 5" />
      <path d="M11 13.5h5.6a1.4 1.4 0 011.3.87l1.1 2.63" />
      <path d="M13 8.2h2.6a1 1 0 01.9.56l1.1 2.24" />
      <path d="M5.6 10.5V7.8a.8.8 0 01.8-.8h1.9" />
    </svg>
  );
}

export function PearlsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M7 8.5h10l-1.1 10.4a1.6 1.6 0 01-1.6 1.4H9.7a1.6 1.6 0 01-1.6-1.4L7 8.5z" />
      <path d="M6 8.5h12" />
      <path d="M9.5 8.5L10.7 5a1.4 1.4 0 011.3-.9 1.4 1.4 0 011.3.9l1.2 3.5" />
      <circle cx="10.3" cy="13" r="0.9" />
      <circle cx="13.6" cy="13.6" r="0.9" />
      <circle cx="11.3" cy="16.4" r="0.9" />
    </svg>
  );
}

export function CandyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M5.5 4.5L18 17" />
      <circle cx="8.4" cy="7.4" r="2.1" />
      <circle cx="12.6" cy="11.6" r="2.1" />
      <circle cx="16.8" cy="15.8" r="2.1" />
    </svg>
  );
}

export function KidsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <circle cx="12" cy="6.3" r="2.6" />
      <path d="M6.2 19v-3.4a5.8 5.8 0 0111.6 0V19" />
      <path d="M4.5 19h15" />
    </svg>
  );
}
