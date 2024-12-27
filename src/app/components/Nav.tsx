import HeaderFooter from "@/app/components/HeaderFooter";
import NavBody from "@/app/components/NavBody";
import { height } from "@/app/utils/animations";
import { motion } from "motion/react";

const navlinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "#",
    title: "About",
  },
  {
    href: "/category",
    title: "Categories",
  },
];
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
        <NavBody navlinks={navlinks}></NavBody>
        <HeaderFooter />
      </div>
    </motion.div>
  );
};

export default Nav;
