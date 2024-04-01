"use client"
import { useState,useEffect } from "react";
import { BookOpen } from "phosphor-react";
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
import { HoverEffect } from "../ui/card-hover-effect";
import useFetchGroupMembers from "./hooks/useGetCourse";
import { GetCoursesQuery } from "@/generated/backendGraphql";
import { Json_Array_Comparison_Exp } from "@/generated/graphql";
import isLoggedIn from "@/utils/isLoggedIn";


 
export type Courses={
Id:number,
CourseName:string,
Description:string,
Chapters:[JSON],
Links:[string]
}
export default function DashboardView() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setisUserId] = useState(false);
  
  useEffect(() => {
    // This function runs after the component mounts, ensuring it's in a client-side context
    const checkLoginStatus = () => {
      if (typeof window !== "undefined") {
        const loggedIn = localStorage.getItem('isLogged');
        const admining = localStorage.getItem('isLogged');
        const Id = localStorage.getItem('userId');
        setIsLogged(loggedIn === 'true');
        setIsAdmin(admining === 'true')
        setIsAdmin(Id as any)
      }
    };
    
    checkLoginStatus();
  }, []); 
  const {data,isPending}=useFetchGroupMembers(userId as any)
  
  return (
  <div className="w-[100%] ml-[25%] lg:ml-[17%] flex justify-center items-center">
    <div className="w-[70%]">
    <div className=" pt-4 pb-2 text-[1.7rem] text-center font-semibold ">
        <p>Available Courses</p>
    </div>
       <div className="max-w-5xl mx-auto ">
      <HoverEffect items={data?.Course as any as Courses[]} isLoading={isPending} isLogged={isLogged} isAdmin={false}/>
    </div>
    <div>
    </div>
    </div>
  </div>
  );
}
