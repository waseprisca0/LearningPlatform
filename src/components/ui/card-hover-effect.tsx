import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Plus ,Trash,Ticket,CheckCircle} from "phosphor-react";
import { useState } from "react";
import { Button } from "./button";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export type Courses={
Id:number,
CourseName:string,
Description:string,
Chapters:[JSON],
Links:[string]
}
interface fetching{
  CourseId:number
}
interface feedback{
  Feedback:fetching[]
}
export const HoverEffect = ({
  items,
  className,
  isAdmin,
  isLoading,
  FetchingData,
  isLogged
}: {
  items:Courses[]
  isLoading:boolean
  isLogged?:boolean
  FetchingData?:feedback
  isAdmin:boolean
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {!isLoading ? items?.map((item:any, idx:any) => (
        <Link
          href={`/careers/${String(item.CourseName)}/${Number(item.Id)}`}
          key={item?.Id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex justify-between items-center">
              <CardTitle>{item.CourseName}</CardTitle>
              { FetchingData?.Feedback.map((one) => {
                 return one.CourseId === item.Id && isLogged? <CheckCircle className='h-[1.6rem] w-[1.6rem]' weight="bold" color="green"/> : null;
                }) }
            </div>
            <CardDescription>{item.Description}</CardDescription>
            {
                isAdmin && (
                    <Link
                    href={`/admin/edit/${String(item.CourseName)}/${Number(item.Id)}`}>
                <Button className="w-[100%] mt-4 bg-zinc-300 hover:bg-zinc-500 rounded-full hover:text-white text-[black]">
                    Edit
                </Button>
                </Link>
                )
            }
          </Card>
        </Link>
      )):
      < >
        <Skeleton className="h-[15rem] mx-4">
</Skeleton> 
<Skeleton className="h-[15rem]  mx-4 ">
</Skeleton>
 <Skeleton className="h-[15rem]  mx-4 ">
</Skeleton>
      </>}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#eee] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide ", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-600 tracking-wide leading-relaxed text-sm line-clamp-4",
        className
      )}
    >
      {children}
    </p>
  );
};
