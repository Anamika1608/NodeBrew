"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#FEFFDF]  text-xl text-black  border-neutral-300  hover:bg-[#fdffc6]"
      >
        Get Started
      </Button>
    </div>
  );
}
