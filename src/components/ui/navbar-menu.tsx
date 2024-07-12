"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] text-xl"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 transform -translate-x-1/2 m-3">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className=" bg-[#FEFFDF] backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl "
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative shadow-md bg-[#F5E6D3] shadow-input flex grow justify-end space-x-5 px-10 py-6 sm:pr-20 "
    >
      {children}
    </nav>
  );
};


export const HoveredLink = ({ children, to, ...rest }) => {
    return (
      <Link
        to={to}
        {...rest}
        className="text-black hover:underline hover:underline-offset-4 text-xl"
      >
        {children}
      </Link>
    );
  };
