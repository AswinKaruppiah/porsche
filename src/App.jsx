import { useEffect, useState } from "react";

import "./App.css";
import Home from "./UI/Home";
import Navbar from "./UI/navbar";
import Upperlayer from "./UI/Upperlayer";
import Video from "./UI/Video";

function App() {
  const [laptop, setlaptop] = useState();
  useEffect(() => {
    if (window.innerWidth >= 900) return setlaptop(true);
    else return setlaptop(false);
  }, []);

  function widthResizer() {
    if (window.innerWidth <= 900) return setlaptop(false);
    else return setlaptop(true);
  }
  window.addEventListener("resize", widthResizer);
  return laptop ? (
    <Upperlayer />
  ) : (
    <div
      className="h-screen font-porsche flex justify-center
     items-center text-xl text-center"
    >
      <h1> View on the desktop for a better experience</h1>
    </div>
  );
}

export default App;
