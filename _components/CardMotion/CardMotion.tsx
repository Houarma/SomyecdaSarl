

import { motion } from "framer-motion";
export default function CardMotion({ children }: { children: React.ReactNode }) {
  return (
    	<motion.div
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.15 },
					},
				}}
				initial="hidden"
				animate="visible">{children}</motion.div>
  );
}