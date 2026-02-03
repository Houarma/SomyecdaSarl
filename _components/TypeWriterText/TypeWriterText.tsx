"use client";
import { ElementType } from "react";
import { motion } from "framer-motion";

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        ease: "easeOut",
      },
    },
  };

  const Component = motion[as as keyof typeof motion] || motion.p;

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </Component>
  );
}
