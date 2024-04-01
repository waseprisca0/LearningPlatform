import SideBar from "@/components/SideBar/SideBar";
import Edit from "@/components/AdminView/Edit";
import Dashboard from "@/components/Dashboard";

export default function EditPage() {
  return (
  <div className="w-full ">
     <Dashboard isLogged={true}/>
     <div className="flex">
     <SideBar/>
     <Edit/>
     </div>
  </div>
  );
}
