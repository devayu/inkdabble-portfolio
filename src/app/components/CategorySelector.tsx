"use client";
import Image from "next/image";
import { motion } from "motion/react";

type CategorySelectorProps = {
  images: {
    name: string;
    imgPath: string;
    subtitle: string;
  }[];
};
const CategorySelector = ({ images = [] }: CategorySelectorProps) => {
  return (
    <div className="flex h-full items-center justify-evenly">
      {images.map(({ name, imgPath, subtitle }) => {
        return (
          <motion.div
            className="relative opacity-80 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            key={name}
          >
            <Image
              src={imgPath}
              alt={name}
              width={800}
              height={800}
              className="w-full h-full"
            ></Image>
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1, transition: { ease: "easeOut" } }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <span className="text-4xl font-bold text-white z-10 uppercase tracking-wider mb-14">
                {subtitle}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
export default CategorySelector;
