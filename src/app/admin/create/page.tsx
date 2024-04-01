import SideBar from "@/components/SideBar/SideBar";
import Dashboard from "@/components/Dashboard";
import Create from "@/components/AdminView/Create";

export default function EditPage() {
  return (
  <div className="w-full ">
     <Dashboard isLogged={true}/>
     <div className="flex">
     <SideBar/>
     <Create isEdit={false}/>
     </div>
  </div>
  );
}
