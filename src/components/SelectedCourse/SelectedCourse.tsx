"use client"
import { useState } from "react";
import { BookOpen, CaretRight } from "phosphor-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function OneSelectedCourse({title,content}:{title:string,content:string}) {
  return (
//   <div className="flex justify-between items-center cursor-pointer rounded text-black bg-[#eee] hover:scale-105 transition-all hover:bg-[#d0d0d5] py-5 px-4 text-[1.2rem] mb-7">
   <Accordion className="text-black bg-[#eee] py-2 rounded px-4 text-[1.2rem] mb-7" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>
      {content}
    </AccordionContent>
  </AccordionItem>
</Accordion>

//   </div>
  );
}
