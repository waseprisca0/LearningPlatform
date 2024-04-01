"use client"
import SelectedCourse from "./SelectedCourse";
import {useParams } from "next/navigation";
import useFetchOneCourse from "./hooks/useFetchOneCourse";
import { Skeleton } from "@chakra-ui/react";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import loadingGIf from "../../assets/loading.gif"
import useCompleteCourse from "./hooks/useCompleteCourse";
import Image from "next/image";
import useFetchGroupMembers from "../AdminView/hooks/useGetCourse";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../Dashboard";
import OpenAiPage from "../OpenAi/OpenAi";

export default function AllSelectedCourse() {
    const router=useRouter()
    const [isComplete,setIsComplete]=useState<boolean>(false)
    const {id:CourseId} = useParams()

    const [isLogged, setIsLogged] = useState(false);
    const [isUserId, setisUserId] = useState(false);
    
    useEffect(() => {
        // This function runs after the component mounts, ensuring it's in a client-side context
        const checkLoginStatus = () => {
            if (typeof window !== "undefined") {
                const loggedIn = localStorage.getItem('isLogged');
                const Id = localStorage.getItem('userId');
                setIsLogged(loggedIn as any);
                setisUserId(Id as any);
            }
        };
        
        checkLoginStatus();
    }, []); 
    const {FetchingData}=useFetchGroupMembers(isUserId)
const redirection=()=>{
    router.push('/login')
}
const {data,isPending}=useFetchOneCourse(CourseId as any)
  const {handleSave,isLoading}= useCompleteCourse()

  return (
    <>
    <Dashboard isLogged={isLogged}/>
      <OpenAiPage />
  <div className="w-[100%] flex justify-center items-center">
    <div className="w-[50%]">
    <div className=" py-4 text-[1.7rem] text-center font-semibold mb-[2rem]">
        <p>Welcome to our {data?.Course_by_pk?.CourseName} course</p>
    </div>
    <div>
        <p>
         {data?.Course_by_pk?.Description}
        </p>
    </div>

    <div>
        <p className="py-4 mt-[2rem] text-[1.7rem] text-center font-semibold mb-[2rem]">
            Courses
        </p>
    </div>
        {!isLogged?'':!isPending?data?.Course_by_pk?.Chapters?.map((course) => (
                        <SelectedCourse key={course.id} title={course.name} content={course.content} />
                    ))
                    
                    :<Skeleton>
                        <SelectedCourse key={0} title={'k'} content={'l'}/>
                    </Skeleton>

                }
               {
    isPending ?
    <Skeleton>
        <SelectedCourse key={0} title={'k'} content={'l'}/>
    </Skeleton>
    :
    <div className="text-black bg-[#eeeeee7e] py-6 rounded px-4 text-[1.2rem] mt-7 ">
       {isLogged &&  <p className="text-center">Looking for more about the course? Click <a href={data?.Course_by_pk?.Links as string} className="underline text-blue-500">here</a> to explore!</p>  }

        {isLogged?FetchingData?.Feedback.some(one => one.CourseId === Number(CourseId)) ?
            <>
                
            </>
            :
            <Button onClick={()=>{handleSave(isUserId)}} className="w-[100%] bg-[#502779ee] hover:bg-[#502779] text-[white] py-4 my-4 uppercase">
                {isLoading ? <Image alt='Saving....' src={loadingGIf} height={25}/> : 'Mark Course Complete'}
            </Button>: <Button onClick={redirection} className="w-[100%] bg-[#502779ee] hover:bg-[#502779] text-[white] py-4 my-4 uppercase">
               START COURSE
            </Button>
        }
    </div>
}
    <div>
    </div>
    </div>
  </div>
    </>
  );
}
