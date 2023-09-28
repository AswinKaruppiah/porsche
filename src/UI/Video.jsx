import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import SectionWrapper from "../compoents/SectionWrapper";

function CarVideo() {
  return (
    <div className="p-6">
      <Video autoPlay={false} controls={true}></Video>
    </div>
  );
}

export default CarVideo;
