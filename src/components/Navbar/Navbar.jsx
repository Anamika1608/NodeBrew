"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-end">
      <Navbar className="top-0"  />
    </div>
  ); 
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}
    >
      <div className="flex justify-end w-100% ">
      <div className="flex justify-start">
        {/* <img src="/logo.png" alt="" className="h-14 "/> */}
        </div>
      <Menu setActive={setActive}>
        <HoveredLink to="/Home">Home</HoveredLink>
        <HoveredLink to="/About">About</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Events" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/Hack-Brew">Hack Brew</HoveredLink>
            <HoveredLink to="/Brew-Bridge">Brew Bridge</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/Chapters">Chapters</HoveredLink>
            <HoveredLink to="/NewsLetter">NewsLetter</HoveredLink>
            <HoveredLink to="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </div>
      

      
    </div>
  );
}
