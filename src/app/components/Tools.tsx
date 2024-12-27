"use client";
import { opacity } from "@/app/utils/animations";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type ToolContainerProps = {
  icon: React.ReactNode;
  title: string;
};
const ToolContainer = ({ icon, title }: ToolContainerProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex relative items-center justify-center cursor-pointer"
    >
      {icon}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              x: "-50%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: "-50%",
            }}
            exit={{
              opacity: 0,
              y: 2,
              x: "-50%",
            }}
            transition={{
              duration: 0.2,
            }}
            className="text-sm absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-0.5 whitespace-pre bg-neutral-100 w-fit rounded-md text-neutral-900 opacity-20"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Tools = ({
  tools,
}: {
  tools: { name: string; icon?: React.ReactNode }[];
}) => {
  return (
    <div className="flex gap-2">
      {tools.map(({ name, icon }) => {
        return <ToolContainer title={name} key={name} icon={icon} />;
      })}
    </div>
  );
};

export default Tools;
