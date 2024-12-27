"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/app/utils/utils";
import { useRouter } from "next/navigation";

const HeroComponent = () => {
  const router = useRouter();
  const [triggerFade, setTriggerFade] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className={`${cn(
          "relative h-screen w-full flex flex-col items-center justify-center"
        )}`}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: "0%", opacity: 1 }}
          animate={
            triggerFade ? { y: "-100%", opacity: 0 } : { y: "0%", opacity: 1 }
          }
          transition={{ duration: 0.75, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (triggerFade) {
              router.push("/category");
            }
          }}
        >
          <Image
            src="/hero-middle.jpg"
            alt="middle Image"
            layout="fill"
            objectFit="contain"
            className="h-full w-full cursor-pointer"
            onClick={() => {
              setTriggerFade(true);
            }}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 right-0 h-2/5"
          initial={{ y: "0%", opacity: 1 }}
          animate={
            triggerFade ? { y: "-100%", opacity: 0 } : { y: "0%", opacity: 1 }
          }
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Image
            src="/hero-upper.png"
            alt="Top Image"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            className="h-full w-full"
          />
        </motion.div>

        {/* Div fading out to the bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/5"
          initial={{ y: "0%", opacity: 1 }}
          animate={
            triggerFade ? { y: "100%", opacity: 0 } : { y: "0%", opacity: 1 }
          }
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Image
            src="/hero-lower.png"
            alt="lower Image"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            className="h-full w-full"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setTriggerFade(true)}
              className="px-4 py-2 text-white backdrop-blur-sm  rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.1] text-xl md:text-5xl uppercase font-normal tracking-widest transition duration-200"
            >
              Explore
            </button>
          </div> */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroComponent;
