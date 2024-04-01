"use client"

import { Browsers, ChartBar, PencilLine, Plus, User } from "phosphor-react";
import Link from "next/link";

// import RightSide from "../Login/RightSide";

export default function SideBar() {
  return (
   <div className=" w-[25%] lg:w-[18%] border-r-2 border-slate-100 h-lvh fixed  transition ease-in-out delay-[250]">
    <div className="text-center py-4 bg-[#eee]">
        <p>ADMIN</p>
    </div>
    <div>
         <div >
      <Link
      
      href='/admin/dashboard'>
      <div className="flex items-center py-4 px-4 border-b-2 hover:border-none border-slate-100 hover:bg-[#ae53a6] hover:text-[white] hover:rounded-tr-[2rem] hover:rounded-br-[2rem] gap-2 ">
       <ChartBar className="w-5 h-5"/>
        <p>Dashboard</p>
      </div>
      </Link>
     <Link href='/admin/create'>
      <div  className="flex items-center py-4 px-4 border-b-2 hover:border-none border-slate-100 hover:bg-[#ae53a6] hover:text-[white] hover:rounded-tr-[2rem] hover:rounded-br-[2rem] gap-2 ">
       <Plus className="w-5 h-5"/>
        <p>Create</p>
      </div>
     </Link>
      <Link href='/admin/edit'>
      <div  className="flex items-center py-4 px-4 border-b-2 hover:border-none border-slate-100 hover:bg-[#ae53a6] hover:text-[white] hover:rounded-tr-[2rem] hover:rounded-br-[2rem] gap-2">
       <PencilLine className="w-5 h-5" />
        <p>Edit</p>
      </div>
      </Link>
    </div>
    </div>
   </div>
  );
}
