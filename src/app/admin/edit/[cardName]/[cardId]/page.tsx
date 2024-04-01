import SideBar from "@/components/SideBar/SideBar";
import Edit from "@/components/AdminView/Edit";
import { log } from "next-axiom";
import Dashboard from "@/components/Dashboard";
import Create from "@/components/AdminView/Create";
import adminGqlClient from "@/clients/adminGqlClient";
import {
  GetCourseByPkQuery
} from "@/generated/backendGraphql";
interface Params {
  cardName: string;
  cardId: number;
}

export default async function EditPage({ params }: { params: Params }) {
    const data = (await getServerSideData(params)) ;
  return (
  <div className="w-full ">
     <Dashboard isLogged={true}/>
     <div className="flex">
     <SideBar/>
     <Create isEdit={true} data={data?.data.Course_by_pk}/>
     </div>
  </div>
  );
}
const getServerSideData = async (params: Params) => {
  const { cardId } = params;

  try {
    const data: GetCourseByPkQuery = await adminGqlClient.getCourseByPk(
      { Id: cardId }
    );
    return { data };
  } catch (error: any) {
    log.error("Error fetching program submission", error);
    
  }
};
