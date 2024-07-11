"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#FEFFDF] dark:bg-slate-900 text-xl text-black dark:text-white border-neutral-300 dark:border-slate-800 hover:bg-[#fdffc6]"
      >
        Get Started
      </Button>
    </div>
  );
}
