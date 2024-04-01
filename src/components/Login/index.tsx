"use client"
import Image from "next/image";
import square from '../assets/squareBox.webp'
import { BookOpen } from "phosphor-react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function LoginPage() {
  return (
    <div className="w-full flex justify-center">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}
