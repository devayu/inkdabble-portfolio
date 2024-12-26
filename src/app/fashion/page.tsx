"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
const FashionPage = () => {
  const [triggerFade, setTriggerFade] = useState(false);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      {/* Button to trigger the fade-out effect */}
      <button
        onClick={() => setTriggerFade(true)}
        className="mb-4 px-4 py-2 text-white rounded border-0 text-5xl uppercase tracking-widest w-full h-full"
      >
        Astha Maurya
      </button>

      {/* Div fading out to the top */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-white h-2/5"
        initial={{ y: "0%", opacity: 1 }}
        animate={
          triggerFade ? { y: "-100%", opacity: 0 } : { y: "0%", opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/hero.jpg"
          alt="Top Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </motion.div>

      {/* Div fading out to the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white h-2/5"
        initial={{ y: "0%", opacity: 1 }}
        animate={
          triggerFade ? { y: "100%", opacity: 0 } : { y: "0%", opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/hero.jpg"
          alt="Top Image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </motion.div>
    </div>
  );
};

export default FashionPage;
