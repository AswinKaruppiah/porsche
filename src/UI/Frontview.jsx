import React from "react";
import SectionWrapper from "../compoents/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Frontview() {
  return (
    <section className="w-full h-screen">
      <motion.div variants={fadeIn("right", "", 0, 1)}>
        <h1 className="font-Montserrat font-bold tracking-wider text-[50px] text-gray-950 max-w-xl">
          WELCOME TO THE
          <span className="text-white font-porsche ml-2">WORLD OF PORSCHE</span>
        </h1>
      </motion.div>

      <div className="max-w-xs float-right  ">
        <motion.h1
          variants={fadeIn("down", "", 0.5, 1)}
          className="text-[20px] font-Montserrat font-semibold mb-4  tracking-wider"
        >
          Description
        </motion.h1>
        <motion.p
          variants={fadeIn("left", "", 0.5, 1)}
          className="text-[17px] font-Mukta font-medium  text-white tracking-wide leading-7 "
        >
          The Porsche 911 (pronounced Nine Eleven or in German: Neunelf) is a
          two-door 2+2 high performance rear-engined sports car introduced in
          September 1964 by Porsche AG of Stuttgart, Germany. It has a
          rear-mounted flat-six engine and originally a torsion bar suspension.
        </motion.p>
      </div>
    </section>
  );
}

export default SectionWrapper(Frontview);
