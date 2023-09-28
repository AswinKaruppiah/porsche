import { Scroll } from "@react-three/drei";
import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0"
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
