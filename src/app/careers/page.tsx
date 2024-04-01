import Dashboard from "@/components/Dashboard";
import Course from "@/components/Course";
import OpenAiPage from "@/components/OpenAi/OpenAi";

export default function Home() {
  return (
    <>
    <Dashboard isLogged={true}/>
    <OpenAiPage/>
     <div className="w-full mt-[2rem]">
      <Course/>
     </div>
    </>
  
  );
}
