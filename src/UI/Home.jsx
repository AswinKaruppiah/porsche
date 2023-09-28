import React from "react";
import SectionWrapper from "../compoents/SectionWrapper";
import "../App.css";
import { carlogo } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/motion";

const data = [
  {
    number: "331 KW/450 PS",
    name: "Power[KW]",
  },
  {
    number: "3,8s",
    name: "Acceleration",
  },
  {
    number: "304 Km/h",
    name: "Top Speed",
  },
  {
    number: "7,500 1/min",
    name: "Maximum engine speed",
  },
];

function Home() {
  return (
    <section className="w-full h-screen flex justify-start items-center   relative ">
      <img
        className="absolute top-[2%] h-20 w-20 object-contain"
        src={carlogo}
        alt="logo"
      />
      <aside>
        {data.map((text, index) => (
          <div className="mt-[50px]">
            <motion.h3
              variants={fadeIn("up", "", index * 0.1, 0.1)}
              className="font-bold text-[20px] font-porsche "
            >
              {text.number}
            </motion.h3>
            <motion.p
              variants={fadeIn("", "", 0, 0.2)}
              className="tracking-widest font-Montserrat text-[15px]"
            >
              {text.name}
            </motion.p>
          </div>
        ))}
      </aside>
      <motion.div
        initial={{
          opacity: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: 1,
        }}
        className="text-center"
      >
        <h3 className="text-[35px] tracking-widest  font-porsche">Porsche</h3>
        <h1 className="text-[90px] lg:text-[110px] text-white font-bold -mt-10 text ">
          911 Carrera 4S
        </h1>
      </motion.div>
      <div className="absolute top-[55%] right-[0]">
        <div className="h-60 w-1 left-[35%] -top-14 absolute bg-slate-400 rounded-xl" />
        <h1 className="text-[20px] font-Montserrat  tracking-widest rotate-90 ">
          Scroll Down
        </h1>
      </div>
    </section>
  );
}

export default SectionWrapper(Home);
