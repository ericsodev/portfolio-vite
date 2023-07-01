import React, { useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function RedactReveal({ children }: React.PropsWithChildren) {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const divAnimate = useAnimation();

  useEffect(() => {
    if (!inView) return;

    divAnimate.start("visible");
  }, [inView, divAnimate]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        className="absolute top-1 bottom-1 left-0 right-0 bg-tealgreen/80"
        ref={ref}
        animate={divAnimate}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        transition={{ duration: 0.5, delay: 0.05, ease: "easeIn" }}
      ></motion.div>
      {children}
    </div>
  );
}
