"use client";

import { motion } from "framer-motion";
import { ElementType, createElement } from "react";

interface TypewriterTextProps {
  text: string;
  as?: ElementType;
  speed?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  as = "p",
  speed = 0.04,
  className = "",
}: TypewriterTextProps) {
  const letters = Array.from(text);

  return createElement(
    as,
    { className, "aria-label": text },
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: speed,
          },
        },
      }}
      className="inline-block"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: "0.25em" },
            visible: {
              opacity: 1,
              y: "0em",
              transition: { ease: "easeOut" },
            },
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
