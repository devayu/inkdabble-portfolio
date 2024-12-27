import { translate } from "@/app/utils/animations";
import { motion } from "motion/react";
import Link from "next/link";

const HeaderFooter = () => {
  return (
    <div className="flex items-center uppercase mt-10 text-sm gap-4">
      <ul className="py-4 font-semibold">
        <motion.li
          variants={translate}
          custom={[0.2, 0]}
          animate="enter"
          initial="initial"
          exit="exit"
        >
          <span className="font-normal opacity-50"> Made By: </span>{" "}
          <Link href="/">devlusion</Link>
        </motion.li>
      </ul>

      <ul className="py-4 font-semibold">
        <motion.li
          variants={translate}
          custom={[0.2, 0]}
          animate="enter"
          initial="initial"
          exit="exit"
        >
          {`Copyright © ${new Date().getFullYear()}, devlusion. All Rights Reserved.`}
        </motion.li>
      </ul>
    </div>
  );
};

export default HeaderFooter;
