import React from "react";
import SectionWrapper from "../compoents/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/motion";

function Backview() {
  return (
    <section className="w-full h-screen flex justify-center items-center text-center">
      <div>
        <motion.h1
          variants={scale(0.3)}
          className="font-porschebold text-white text-[100px] lg:text-[150px] leading-[8rem] text-center mb-11"
        >
          Porsche Exhaust
        </motion.h1>
        <div className="max-w-xs float-right text-start  ">
          <motion.h1
            variants={fadeIn("down", "", 0.3, 1)}
            className="text-[25px] font-Montserrat mb-4  tracking-wider"
          >
            Description
          </motion.h1>
          <motion.p
            variants={fadeIn("left", "", 0.5, 1)}
            className="text-[22px] font-Montserrat  text-white tracking-wide leading-9 "
          >
            This Porsche model can hit a top track speed of 190 mph and when
            equipped with an automatic PDK it can accelerate from zero to 60 mph
            in 3.4 seconds.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Backview);
