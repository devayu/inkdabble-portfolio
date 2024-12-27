import Link from "next/link";
import { motion } from "motion/react";
import { translate } from "@/app/utils/animations";
import { useState } from "react";
import { blur } from "@/app/utils/animations";

type NavBodyProps = {
  navlinks: {
    href: string;
    title: string;
  }[];
};
type HoverLinkType = {
  isActive: boolean;
  index: number;
};
const NavBody = ({ navlinks }: NavBodyProps) => {
  const [hoverLink, setHoverLink] = useState<HoverLinkType>({
    isActive: false,
    index: 0,
  });
  const getChars = (title: string) => {
    return title.split("").map((letter: string, index: number) => {
      return (
        <motion.span
          key={`c_${index}_${letter}`}
          custom={[index * 0.02, (title.length - index) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {letter}
        </motion.span>
      );
    });
  };
  return (
    <div className="flex flex-wrap mt-10 gap-8">
      {navlinks.map(({ href, title }, index) => {
        return (
          <Link
            onMouseOver={() => setHoverLink({ isActive: true, index })}
            onMouseLeave={() => setHoverLink({ isActive: false, index })}
            href={href}
            key={`lnk_${href}`}
            className="text-3xl md:text-5xl uppercase overflow-hidden"
          >
            <motion.p
              variants={blur}
              className="flex"
              initial="initial"
              animate={
                hoverLink.isActive && hoverLink.index !== index
                  ? "enter"
                  : "exit"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};
export default NavBody;
