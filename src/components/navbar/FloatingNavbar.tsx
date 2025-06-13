"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavItem } from "@/types";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.3,
      }}
      className={cn("fixed top-6 left-96 z-[5000]", className)}
    >
      {/* Main navbar container */}
      <motion.div
        className="static px-6 py-3 rounded-2xl bg-black/10 backdrop-blur-xl border border-white/10 shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Animated background blob */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
          style={{
            background: "linear-gradient(45deg, #3b82f6, #2563eb, #1d4ed8, #0ea5e9)",
            backgroundSize: "300% 300%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Navigation items */}
        <div className="static flex items-center space-x-1">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={item.name}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative px-4 py-2 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                      boxShadow:
                        "0 4px 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  />
                )}

                {/* Icon and text container */}
                <Link href={item.link} tabIndex={0}>
                  <div className="relative flex items-center space-x-2 z-10">
                    {/* Icon with rotation animation */}
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="lg"
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-white drop-shadow-lg"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      />
                      {/* Glowing effect */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          size="lg"
                          className="text-cyan-400 blur-sm opacity-50"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Text with slide animation */}
                    <motion.span
                      className={`text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white drop-shadow-lg"
                          : "text-white/70 group-hover:text-white"
                      } hidden sm:block`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 2 }}
                    >
                      {item.name}
                    </motion.span>
                  </div>
                </Link>

                {/* Hover particles */}
                <motion.div className="relative inset-0 rounded-xl pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [-5, -15, -5],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Edge glow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50" />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default FloatingNavbar;
