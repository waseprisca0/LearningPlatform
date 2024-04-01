"use client"
import { useState } from "react";
import { BookOpen, CaretRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Bold } from "lucide-react";


export default function OneCourse() {
  return (
     <Link
   href={'/careers/sdsdf'}
   >
  <div className="flex justify-between items-center cursor-pointer rounded text-black bg-[#eee] hover:scale-105 transition-all hover:bg-[#d0d0d5] py-5 px-4 text-[1.2rem] mb-7">
    <div>
        <p>
            Responsive Web Design Certification
        </p>
    </div>
    <div>
        <CaretRight className="w-4 h-4" weight="bold"/>
        
    </div>
  </div>
   </Link>
  );
}
