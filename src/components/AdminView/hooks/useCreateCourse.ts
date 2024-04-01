import {
  GetCourseByPkQuery,
  useGetCourseByPkQuery,
  useInsertNewCourseMutation,
  useUpdatingCourseMutation
} from "../../../generated/graphql";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useRouter,useParams, usePathname } from 'next/navigation'
import { useToast } from "@chakra-ui/react";
interface CreateCourseForm {
  CourseName:string,
  Links:string,
  Description:string,
  Chapters:mychapter[],
}
interface mychapter{
    name:string,
    content:string,
}



export default function useCreateCourse() {
    const router=useRouter()
    const {cardId}=useParams()
    const pathname=usePathname()
    const isEdit=pathname.includes('edit')
  const toast = useToast();
     const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    control,
    setError,
    watch,
    reset,
    getValues,
  } = useForm<CreateCourseForm>({
    mode: "onChange",
    // defaultValues:isEdit?{
    //   CourseName: data?.CourseName,
    //   Description: data?.Description,
    //   Chapters: data?.Chapters,
    //   Links:data?.Links as any,
    // }:{
    //   CourseName:'' ,
    //   Description:'' ,
    //   Chapters: [{ name: "", content: "" }],
    //   Links:'' as any,
    // },
    defaultValues:!isEdit?{
      CourseName:'' ,
      Description:'' ,
      Chapters: [{ name: "", content: "" }],
      Links:'' as any,
    }:'' as any,
  });

  const { mutate, isPending: isLoading,isSuccess } =
    useInsertNewCourseMutation({
      onSuccess: (data) => {
         toast({
          title: "Course succesfully created",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        router.push('/admin/dashboard');
      },
      onError: (error) => {
        toast({
          title: "Error Occurred while creating course",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      },
    });
    const { mutate:Editing, isPending:isEditing } =
    useUpdatingCourseMutation({
      onSuccess: (data) => {
         toast({
          title: "Course succesfully updated",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        router.push('/admin/dashboard');
      },
      onError: (error) => {
        toast({
          title: "Error Occurred while creating course",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      },
    });
    const handleSave = () => {
     !isEdit?mutate({
      CourseName:getValues().CourseName,
  Links:getValues().Links,
  Description:getValues().Description,
  Chapters:getValues().Chapters,
    }):Editing({
      Id:Number(cardId),
      CourseName:getValues().CourseName,
  Links:getValues().Links,
  Description:getValues().Description,
  Chapters:getValues().Chapters,
    });
  };
  

  return {
   handleSave,
    isLoading,
    errors,
    register,
    isEditing,
    control,
    isSuccess,
    handleSubmit,
    watch,
    reset,
    setError,
    isValid,
  };
}
