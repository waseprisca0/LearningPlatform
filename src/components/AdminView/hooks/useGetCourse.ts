
import {
  useGetCoursesQuery,
  GetCoursesQuery,
  useFeedbackDataQuery,
  FeedbackDataQuery
} from "../../../generated/graphql";


export default function useFetchGroupMembers(id:any) {

    const { data,isPending,refetch } = useGetCoursesQuery<
    GetCoursesQuery,
    Error
  >(
    {}
   
  );
  const { data:FetchingData,isPending:isFetching } = useFeedbackDataQuery<
    FeedbackDataQuery,
    Error
  >(
    {
      UserId:id
    }
   
  );

  return {
    data,
    isPending,
    FetchingData,
    refetch,
  };
}
