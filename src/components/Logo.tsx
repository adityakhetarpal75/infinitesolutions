import { useId } from "react";
import { siteConfig } from "@/lib/config";

export default function Logo({
  theme = "light",
  className = "",
}: {
  /** The background this logo sits on — controls the wordmark color. */
  theme?: "light" | "dark";
  className?: string;
}) {
  const gradientId = useId();
  const textClass = theme === "dark" ? "text-white" : "text-slate-900";

  return (
    <span
      className={`flex items-center gap-2.5 text-xl font-bold tracking-tight ${textClass} ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="2"
            y1="4"
            x2="22"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="30%" stopColor="#64748B" />
            <stop offset="55%" stopColor="#F1F5F9" />
            <stop offset="80%" stopColor="#475569" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>
        <path
          d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {siteConfig.name}
    </span>
  );
}
