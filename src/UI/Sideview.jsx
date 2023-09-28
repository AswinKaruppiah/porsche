import React from "react";
import SectionWrapper from "../compoents/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Sideview() {
  return (
    <section className="w-full h-screen flex justify-start items-center ">
      <div className="ml-4 -mt-20">
        <motion.h1
          variants={fadeIn("down", "", 0.2, 1)}
          className="font-porschebold tracking-wider text-[50px] mb-10 "
        >
          Braking system
        </motion.h1>
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className="text-[20px] font-Montserrat font-medium max-w-[50%]  text-white tracking-widest leading-7"
        >
          The grey cast iron brake system features aluminium monobloc fixed
          callipers with six pistons each on the front axle. The corresponding
          brake discs have a diameter of 408 millimetres (plus 28 millimetres)
          and a thickness of 36 millimetres (plus two millimetres).
        </motion.p>
      </div>
    </section>
  );
}

export default SectionWrapper(Sideview);
