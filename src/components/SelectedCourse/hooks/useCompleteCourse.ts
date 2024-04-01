import {
  useCompleteCourseMutation
} from "../../../generated/graphql";
import { useParams,useRouter } from 'next/navigation'
import { useToast } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

export default function useCompleteCourse() {
  const router=useRouter()
  const {id}=useParams()
  
  const toast = useToast();

 
    const { mutate, isPending: isLoading } =
    useCompleteCourseMutation({
      onSuccess: (data) => {
         toast({
          title: "Succesfully completed course",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        router.push('/');
      },
      onError: (error) => {

        toast({
          title: "Error Occurred while marking complete",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      },
    });

  const handleSave = (userId:any) => {
     mutate({
      CourseId:id as any,
      UserId:userId
      
    });
  };

  return {
   
    handleSave,
    isLoading,
  
    // value: getValues().name,
  };
}
