"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { background, color, opacity } from "@/app/utils/animations";
import { CiMail } from "react-icons/ci";

import { useState } from "react";
import Nav from "@/app/components/Nav";
import { cn } from "@/app/utils/utils";
import { EMAIL } from "@/app/constants";
const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <motion.div
      className="fixed w-full box-border z-50 p-4 uppercase"
      variants={color}
      initial="initial"
      animate={isActive ? "open" : "closed"}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          I.
        </Link>
        <div
          className="flex items-center gap-2 cursor-pointer uppercase justify-center"
          onClick={() => setActive(!isActive)}
        >
          <div className="w-[22px] relative">
            <div
              className={`${cn(
                "w-full h-px bg-black absolute transition-all ease-[cubic-bezier(0.76,0,0.24,1)]",
                isActive ? "-rotate-45" : "bg-white top-[4px]"
              )}`}
            ></div>
            <div
              className={`${cn(
                "w-full h-px bg-black absolute  transition-all ease-[cubic-bezier(0.76,0,0.24,1)]",
                isActive ? "rotate-45" : "bg-white top-[-4px]"
              )}`}
            ></div>
          </div>
          <div className="relative flex">
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className="absolute opacity-0"
            >
              close
            </motion.p>
          </div>
        </div>
        <a href={`mailto:${EMAIL}`}>
          <CiMail size={28} />
        </a>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav></Nav>}</AnimatePresence>
      {/* //TODO: Look into this later */}
      {/* <motion.div
        className="h-full w-full absolute opacity-50"
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      ></motion.div> */}
    </motion.div>
  );
};

export default Header;
