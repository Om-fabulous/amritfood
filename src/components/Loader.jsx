"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-5xl font-bold"
            >
              AMRIT FOOD
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 2 }}
              className="h-[2px] bg-white mt-6 mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}