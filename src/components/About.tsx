import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Textures.css";

export default function About() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - windowSize.width / 2) / (windowSize.width / 2);
    const y = (clientY - windowSize.height / 2) / (windowSize.height / 2);

    mouseX.set(x);
    mouseY.set(y);
    cursorX.set(clientX);
    cursorY.set(clientY);
  };

  return (
    <div
      className="black-texture h-screen w-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Imágenes con efecto parallax - Diferentes intensidades */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      {/* Imagen 1 - Movimiento sutil */}
      <motion.div
        className="absolute top-40 left-10"
        style={{
          x: useTransform(mouseX, [-1, 1], [-40, 40]),
          y: useTransform(mouseY, [-1, 1], [-40, 40]),
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      >
        <img
          src="https://i.pinimg.com/1200x/36/42/78/364278378299bd8559a2607d456e52b3.jpg"
          alt="Brent Faiyaz"
          className="w-72 object-cover  "
        />
      </motion.div>

      {/* Imagen 2 - Movimiento medio */}
      <motion.div
        className="absolute top-1/4 right-20"
        style={{
          x: useTransform(mouseX, [-1, 1], [-60, 60]),
          y: useTransform(mouseY, [-1, 1], [-60, 60]),
        }}
        transition={{ type: "spring", stiffness: 25, damping: 18 }}
      >
        <img
          src="https://i.pinimg.com/736x/e1/14/be/e114be902f3b91aee2d9babe85d6e6de.jpg"
          alt="Brent Faiyaz"
          className="w-92 object-cover "
        />
      </motion.div>

      {/* Imagen 3 - Movimiento más pronunciado */}
      <motion.div
        className="absolute bottom-10 left-1/7"
        style={{
          x: useTransform(mouseX, [-1, 1], [-80, 80]),
          y: useTransform(mouseY, [-1, 1], [-80, 80]),
        }}
        transition={{ type: "spring", stiffness: 20, damping: 15 }}
      >
        <img
          src="https://i.pinimg.com/736x/1f/12/de/1f12de9915da5f1322a7d48861bf61cd.jpg"
          alt="Brent Faiyaz"
          className="w-92 h-92 object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute top-20 left-1/4"
        style={{
          x: useTransform(mouseX, [-1, 1], [-70, 70]),
          y: useTransform(mouseY, [-1, 1], [-70, 70]),
        }}
        transition={{ type: "spring", stiffness: 22, damping: 16 }}
      >
        <img
          src="/brent-song.png"
          alt="Brent Faiyaz"
          className="w-80  object-cover"
        />
      </motion.div>

      {/* Imagen 4 - Movimiento rápido */}
      <motion.div
        className="absolute bottom-15 right-1/3"
        style={{
          x: useTransform(mouseX, [-1, 1], [-100, 100]),
          y: useTransform(mouseY, [-1, 1], [-100, 100]),
        }}
        transition={{ type: "spring", stiffness: 18, damping: 14 }}
      >
        <img
          src="https://i.pinimg.com/1200x/3b/8f/20/3b8f20418859e27156c73e369a0b82f7.jpg"
          alt="Brent Faiyaz"
          className="w-92 h-92 object-cover "
        />
      </motion.div>

      {/* Imagen 5 - Movimiento muy rápido */}
      <motion.div
        className="absolute bottom-0 -right-10"
        style={{
          x: useTransform(mouseX, [-1, 1], [-120, 120]),
          y: useTransform(mouseY, [-1, 1], [-120, 120]),
        }}
        transition={{ type: "spring", stiffness: 15, damping: 12 }}
      >
        <img
          src="https://i.pinimg.com/1200x/9e/0f/70/9e0f70d06dcfef91c972abfbe97ea808.jpg"
          alt="Brent Faiyaz"
          className="w-72 h-72 object-cover "
        />
      </motion.div>

      {/* Imagen 6 - Movimiento extremo */}
      <motion.div
        className="absolute top-10 left-1/2"
        style={{
          x: useTransform(mouseX, [-1, 1], [-140, 140]),
          y: useTransform(mouseY, [-1, 1], [-140, 140]),
        }}
        transition={{ type: "spring", stiffness: 12, damping: 10 }}
      >
        <img
          src="https://i.pinimg.com/1200x/7e/dd/3f/7edd3f522903592475f27e6ecab39884.jpg"
          alt="Brent Faiyaz"
          className="w-64 h-64 object-cover "
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-8">
        <motion.div
          style={{
            x: useTransform(mouseX, [-1, 1], [-20, 20]),
            y: useTransform(mouseY, [-1, 1], [-20, 20]),
          }}
          transition={{ type: "spring", stiffness: 35, damping: 25 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <h1
              className="text-[#9C6667] text-[150px] font-bold drop-shadow-3xl "
              style={{ fontFamily: "VintageFace, cursive" }}
            >
              LOOSE CHANGE
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Cursor personalizado */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: useTransform(cursorX, (value: number) => value - 12),
          y: useTransform(cursorY, (value: number) => value - 12),
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </div>
  );
}
