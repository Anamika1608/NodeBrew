"use client";
import React from "react";
import { Button } from "../ui/moving-border2";

export function MovingBorder() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#f0f0f0] dark:bg-slate-900 text-xl text-black dark:text-white border-neutral-300 dark:border-slate-800 hover:bg-[#d8d8d8]"
      >
        Learn More
      </Button>
    </div>
  );
}