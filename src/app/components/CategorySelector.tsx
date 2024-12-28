"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import designCategory from "../../../public/design-category.jpg";
import fashionCategory from "../../../public/fashion-category.jpg";

type CategorySelectorProps = {
  images: {
    name: string;
    imgPath: string;
    subtitle: string;
    path: string;
  }[];
};
const images = [
  {
    name: "fashion",
    imgPath: "/fashion-category.jpg",
    subtitle: "Fashion portfolio",
    path: "fashion",
  },
  {
    name: "graphic",
    imgPath: "/design-category.jpg",
    subtitle: "Graphic portfolio",
    path: "graphic",
  },
];
const CategorySelector = ({ images = [] }: CategorySelectorProps) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="lg:hidden text-2xl font-bold text-center px-4 block">
          Select an image below to explore my work
        </motion.h1>
        <motion.div className="flex min-h-screen items-center gap-4 p-4 lg:justify-evenly flex-col lg:flex-row">
          {images.map(({ name, imgPath, subtitle, path }) => {
            return (
              <motion.div
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                key={name}
                onClick={() => {
                  router.push(path);
                }}
              >
                <Image
                  src={name === "fashion" ? fashionCategory : designCategory}
                  alt={name}
                  placeholder="blur"
                  quality={50}
                  width={700}
                  height={700}
                  className="h-full"
                ></Image>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { ease: [0.76, 0, 0.24, 1] },
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                  <span className="text-4xl font-bold text-white z-10 uppercase tracking-wider">
                    {subtitle}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default CategorySelector;
