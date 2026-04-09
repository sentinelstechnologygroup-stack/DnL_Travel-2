import React from "react";

export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-primary" />
      <span className="text-[10px] tracking-[0.25em] text-primary font-semibold uppercase">
        {label}
      </span>
    </div>
  );
}