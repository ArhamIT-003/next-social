import React, { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg overflow-scroll text-sm scrollbar-hide">
      {children}
    </div>
  );
}
