"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/app/utils";
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
          transition={{ duration: 1, ease: "easeOut" }}
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
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/hero-upper.jpg"
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
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/hero-lower.jpg"
            alt="Top Image"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroComponent;
