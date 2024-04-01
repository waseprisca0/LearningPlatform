
import {
  useGetCourseByPkQuery,
  GetCourseByPkQuery
} from "../../../generated/graphql";

export default function useFetchOneCourse(Id:number) {
   
 const { data,isPending,refetch } = useGetCourseByPkQuery<
    GetCourseByPkQuery,
    Error
  >(
    {
        Id:Id
    }
   
  );

  return {
    data,
    isPending,
    refetch,
  };
}
