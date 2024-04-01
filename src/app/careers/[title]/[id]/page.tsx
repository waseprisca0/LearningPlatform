import Dashboard from "@/components/Dashboard";
import OpenAiPage from "@/components/OpenAi/OpenAi";
import AllSelectedCourse from "@/components/SelectedCourse";

export default function Home() {
  return (
    <>
     <div className="w-full">
      {/* <OpenAiPage /> */}
      <AllSelectedCourse/>
     </div>
    </>
  
  );
}