import React, { useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Layout({ children }: React.PropsWithChildren) {
  const ref = React.useRef(null);
  const sectionInView = useInView(ref, { once: true });
  const sectionControl = useAnimation();
  useEffect(() => {
    if (!sectionInView) return;

    sectionControl.start("visible");
  }, [sectionInView, sectionControl]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={"hidden"}
      transition={{
        duration: 0.5,
        delay: 0.05,
      }}
      animate={sectionControl}
      ref={ref}
      className="px-4 md:px-8 py-8 lg:p-0 min-h-screen grid grid-cols-1 lg:grid-cols-6 grid-rows-6"
    >
      {children}
    </motion.div>
  );
}
