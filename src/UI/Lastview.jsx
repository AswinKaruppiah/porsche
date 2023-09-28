import React from "react";
import SectionWrapper from "../compoents/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Lastview() {
  const time = 0.5;
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <h1 className="font-porschebold text-gray-950 tracking-wider text text-[110px] lg:text-[150px] flex flex-col ">
        <motion.span variants={fadeIn("right", "", time, 0.5)}>911</motion.span>
        <motion.span variants={fadeIn("right", "", time + 0.3, 0.5)}>
          Carrera
        </motion.span>
        <motion.span variants={fadeIn("right", "", time + 0.5, 0.5)}>
          4S
        </motion.span>
      </h1>
    </section>
  );
}

export default SectionWrapper(Lastview);
