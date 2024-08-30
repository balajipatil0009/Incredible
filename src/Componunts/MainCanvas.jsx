import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React from "react";
import Navigators from "./Navigators";

const MainCanvas = () => {
  return (
    // <Canvas style={{ border: "2px solid red" }}>
    //   <ScrollControls pages={1} distance={1}></ScrollControls>
    // </Canvas>
    <>
      <Navigators />
    </>
  );
};

export default MainCanvas;
