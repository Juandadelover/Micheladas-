export function NeonGlasses({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 240" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ng-agua" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8FF3F9" />
          <stop offset="100%" stopColor="#3ADDE6" />
        </linearGradient>
        <linearGradient id="ng-rosa" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF2E9A" />
          <stop offset="100%" stopColor="#FF9AD8" />
        </linearGradient>
      </defs>

      {/* left glass */}
      <path
        d="M40 26h58l-8 20-16 16v58h-10v-58L48 46l-8-20z"
        stroke="url(#ng-agua)"
        strokeWidth="4.5"
        strokeLinejoin="round"
        filter="drop-shadow(0 0 6px rgba(58,221,230,.65))"
      />
      <path d="M40 26h58" stroke="url(#ng-rosa)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M28 150h44" stroke="url(#ng-agua)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M50 120v30" stroke="url(#ng-agua)" strokeWidth="4.5" strokeLinecap="round" />

      {/* right glass, taller */}
      <path
        d="M112 10h68l-9 22-19 19v78h-12V51l-19-19-9-22z"
        stroke="url(#ng-agua)"
        strokeWidth="4.5"
        strokeLinejoin="round"
        filter="drop-shadow(0 0 6px rgba(58,221,230,.65))"
      />
      <path d="M112 10h68" stroke="url(#ng-rosa)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M98 152h60" stroke="url(#ng-agua)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M128 129v23" stroke="url(#ng-agua)" strokeWidth="4.5" strokeLinecap="round" />

      {/* clink spark */}
      <circle cx="98" cy="8" r="3.4" fill="#FF2E9A" filter="drop-shadow(0 0 5px #FF2E9A)" />
      <path
        d="M74 4c6-6 14-8 22-6M108 2c8 0 15 4 19 10"
        stroke="#FFD23F"
        strokeWidth="3"
        strokeLinecap="round"
        filter="drop-shadow(0 0 4px rgba(255,210,63,.8))"
      />
      <circle cx="118" cy="16" r="2.2" fill="#FF7BD5" />
      <circle cx="84" cy="18" r="2" fill="#3ADDE6" />
    </svg>
  );
}
