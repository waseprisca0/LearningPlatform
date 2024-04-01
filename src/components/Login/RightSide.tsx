"use client"
import Image from "next/image";
import square from '@/assets/squareBox.webp'
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { BookOpen } from "phosphor-react";

export default function RightSide() {
  return (
      <div className=" bg-white w-[60%] h-lvh hidden lg:flex justify-center items-center pt-[12rem] ">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.3,
          ease: "easeInOut",
        }}
        className="mt-8 bg-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="pt-[5rem] ">
        <Image
        src={square}
        height={220}
        width={220}
        draggable={false}
        alt='box'
        />
      </div>
      </motion.h1>
    </LampContainer>
      </div>
    
  );
}
