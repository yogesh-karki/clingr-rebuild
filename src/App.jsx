import React, { useEffect, useRef } from "react";
import TopSection from "./TopSection";
import Main from "./Main";
import BottomSection from "./BottomSection";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

const App = () => {
  const main = useRef();

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <TopSection />
          <Main />
          <BottomSection />
        </div>
      </div>
    </>
  );
};

export default App;
