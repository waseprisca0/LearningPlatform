"use client"
import Image from "next/image";
import square from '../assets/squareBox.webp'
import { Prohibit } from "phosphor-react";

export default function NotFoundPage() {
  return (
    <div className="w-full flex flex-col text-center items-center justify-center">
      <Prohibit size={32} />
      <p className="text-[5rem]">
        Not Found
      </p>
    </div>
  );
}
