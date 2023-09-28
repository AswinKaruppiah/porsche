import { Suspense, useState, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  ScrollControls,
  Stage,
  useGLTF,
  useScroll,
  Scroll,
} from "@react-three/drei";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Home from "../UI/Home";
import HtmlContent from "../UI/HtmlContent";

const CarsetCanvas = () => {
  const carset = useGLTF("./porsche/scene.gltf");
  const car = useRef();
  const scroll = useScroll();
  const tl = useRef();
  const { gl, camera } = useThree();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .set(car.current.rotation, { y: 1.5, x: 0 }, 0)
      .set(car.current.position, { x: 0, y: -1.2, z: 80 })

      .to(car.current.scale, { x: 1.4, y: 1.4, z: 1.4 }, 0)
      .to(car.current.rotation, { y: 0, x: 0 }, 0)
      .to(car.current.position, { x: -0.5 }, 0)

      .to(car.current.rotation, { y: -1, x: 0.5 }, 2)
      .to(car.current.position, { x: 7, z: 0 }, 2)

      .to(car.current.rotation, { y: 1 }, 4)
      .to(car.current.position, { x: -7 }, 4)

      // .to(car.current.rotation, { y: 1.5, z: 1, x: 0.6 }, 6)
      // .to(car.current.position, { x: 0 }, 6)

      .to(car.current.rotation, { y: 3.1, z: 0, x: 0 }, 6)
      .to(car.current.position, { x: 0, z: 50 }, 6)

      .to(car.current.rotation, { y: 2, x: 0.3 }, 8)
      .to(car.current.position, { x: 0, z: 50 }, 8);
  }, []);

  return (
    <mesh ref={car}>
      <hemisphereLight intensity={0.5} />
      <pointLight intensity={1} />
      <meshPhysicalMaterial
        reflectivity={0.9}
        roughness={0.9}
        color="#aaa"
        metalness={1}
        iridescence={0.3}
        iridescenceIOR={1}
        iridescenceThicknessRange={[100, 1000]}
      />
      <primitive object={carset.scene} scale={3} />
    </mesh>
  );
};

const Carset = () => {
  return (
    <motion.div className="w-full h-screen">
      <Canvas
        shadows
        frameloop="demand"
        camera={{ position: [0, 0, 10], fov: 4 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enabled={false} />
          <ScrollControls pages={6}>
            <Stage shadows={false} intensity={0.9}>
              <CarsetCanvas />
            </Stage>
            <Scroll html style={{ width: "100%", height: "100%" }}>
              <HtmlContent />
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Preload all />
      </Canvas>
    </motion.div>
  );
};

export default Carset;

// const [target, settarget] = useState(true);
// const { scrollY } = useViewportScroll();
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY >= 752) {
//     settarget(false);
//   }
//   if (window.scrollY <= 752) {
//     settarget(true);
//   }
// });

// const y1 = target
//   ? useTransform(scrollY, [0, 800], [350, -400])
//   : useTransform(scrollY, [1500, 800], [350, -350]);
// const y2 = useTransform(scrollY, [100, 800], [-350, 400]);
//[10, 3, 15]
// const [target, settarget] = useState(true);
// const { scrollY } = useViewportScroll();
// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 752) {
//     settarget(false);
//   }
//   if (window.scrollY <= 752) {
//     settarget(true);
//   }
// });

// const y1 = target
//   ? useTransform(scrollY, [0, 800], [350, -400])
//   : useTransform(scrollY, [1500, 800], [350, -350]);

// .to(car.current.position, { x: -3 }, 4)
//       .to(
//         camera.position,
//         {
//           x: () => -3,
//           y: () => -2,
//           z: () => -1,
//         },
//         4
//       );
