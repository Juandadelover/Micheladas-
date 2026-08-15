"use client";

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      className={`fixed bottom-[110px] left-1/2 z-[100] -translate-x-1/2 rounded-full bg-sol px-5 py-[11px] text-sm font-semibold text-noche shadow-[0_8px_24px_rgba(0,0,0,.4)] transition-all duration-300 ${
        message ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      {message}
    </div>
  );
}
