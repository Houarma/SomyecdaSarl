// components/MotionWrapper.tsx
"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
