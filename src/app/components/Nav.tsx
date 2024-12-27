import HeaderFooter from "@/app/components/HeaderFooter";
import NavBody from "@/app/components/NavBody";
import { NAV_LINKS } from "@/app/constants";
import { height } from "@/app/utils/animations";
import { motion } from "motion/react";

const Nav = () => {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="m-0">
        <NavBody navlinks={NAV_LINKS}></NavBody>
        <HeaderFooter />
      </div>
    </motion.div>
  );
};

export default Nav;
