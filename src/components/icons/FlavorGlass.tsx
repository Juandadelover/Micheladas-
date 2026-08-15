"use client";

import { useId } from "react";

export function FlavorGlass({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  const id = useId();
  const gradId = `fg-${id}`;

  return (
    <svg viewBox="0 0 64 72" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        d="M10 8h44l-6 16-10 10v26h-12V34L16 24 10 8z"
        fill={`url(#${gradId})`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M12 8h40" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 62h24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="6" r="3" fill={color} />
      <circle cx="52" cy="14" r="1.8" fill={color} opacity="0.8" />
    </svg>
  );
}
