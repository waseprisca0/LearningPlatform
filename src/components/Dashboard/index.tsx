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
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";


export default function Dashboard({isLogged}:{isLogged?:boolean}) {
   const [isAdmin, setIsAdmin] = useState<number>(1);
     const [isLoggeds, setIsLogged] = useState(false);
     const router=useRouter()
 useEffect(() => {
    // This function runs after the component mounts, ensuring it's in a client-side context
    const checkLoginStatus = () => {
      if (typeof window !== "undefined") {
        const loggedIn = localStorage.getItem('isLogged');
        const roling = localStorage.getItem('role');
        setIsAdmin(roling as any);
        setIsLogged(loggedIn as any);
      }
    };

    checkLoginStatus();
 }, []); 
 const removeLocal=()=>{
   // Clear local storage items on component mount
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("isLogged");
      window.localStorage.removeItem("role");
      window.localStorage.removeItem("userId");
    }
    router.push('/login')
 }
  return (
    <div className="w-full flex sticky top-0 z-[999] bg-[#ae53a6] justify-between items-center py-3 px-4">
        <Link href={!isLogged?'/':isAdmin===2?'/admin/dashboard':'/careers'}>
         <div className="flex items-center gap-1 text-white">
                <BookOpen className="h-[2rem] w-[2rem]" weight="bold"/>
                <p className=" font-semibold text-[1.5rem]">FutureForge Hub</p>
           </div>
        </Link>
           <div>
            {
                isLoggeds?(<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center">
        <Avatar className="w-8 h-8">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
       
         <div onClick={removeLocal} className="cursor-pointer">
        <DropdownMenuItem className=' pb-3 pt-5'>
          Log out
        </DropdownMenuItem>
         </div>
      </DropdownMenuContent>
    </DropdownMenu>):(
        <Link
                    href='/login'>
                <Button className="w-[100%] bg-[#eee] hover:bg-[white] rounded-full text-[black]">
                    Login
                </Button>
                </Link>
    )
            }
           </div>
    </div>
  );
}
