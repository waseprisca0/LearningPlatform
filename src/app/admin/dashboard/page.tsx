import SideBar from "@/components/SideBar/SideBar";
import Edit from "@/components/AdminView/Edit";
import Dashboard from "@/components/Dashboard";
import DashboardView from "@/components/AdminView/Dashboard";

export default function EditPage() {
  return (
  <div className="w-full ">
     <Dashboard isLogged={true}/>
     <div className="flex">
     <SideBar/>
     <DashboardView/>
     </div>
  </div>
  );
}
