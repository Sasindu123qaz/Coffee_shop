import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const letterAnim = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: i * 0.015 },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: i * 0.01 },
  }),
};

const getLetter = (name) =>
  name.split("").map((letter, index) => (
    <motion.span
      variants={letterAnim}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={index}
      key={index}
    >
      {letter}
    </motion.span>
  ));

const NavList = () => {
  return (
    <ul
      className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent
    items-center uppercase"
    >
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {getLetter(link.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
