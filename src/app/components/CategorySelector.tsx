"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";

type CategorySelectorProps = {
  images: {
    name: string;
    imgPath: string;
    subtitle: string;
    path: string;
  }[];
};

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
        <motion.div className="flex h-screen items-center justify-evenly">
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
