import React from "react";
import SectionWrapper from "../compoents/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Sideview2() {
  return (
    <section className="w-full h-screen flex justify-end items-center ">
      <div className=" max-w-[50%] -mt-20">
        <motion.h1
          variants={fadeIn("down", "", 0.2, 1)}
          className="font-porschebold  tracking-wider text-[50px] mb-10 "
        >
          About Wheels
        </motion.h1>
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className=" text-[20px] font-Montserrat font-medium   text-white tracking-widest leading-7"
        >
          Like the 964, 993 and 996, the 911 of the 997 series is also available
          with all-wheel drive in the Carrera 4 and Carrera 4S. A new addition
          is the Carrera 4 GTS, which offers higher performance. In this series,
          the 911 Targa is only available with all-wheel drive as the Targa 4
          and 4S — a novelty in the 911 series.
        </motion.p>
      </div>
    </section>
  );
}

export default SectionWrapper(Sideview2);
