import {
  useInsertNewUserMutation
} from "../../../generated/graphql";
import { useRouter } from 'next/navigation'
import { useToast } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

interface UserForm {
  FirstName: string;
  LastName:string;
  Email:string;
  Password:string,
  cpassword:string
}

export default function useAddNewUser() {
  const router=useRouter()
  const toast = useToast();

   const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setError,
    watch,
    getValues,
  } = useForm<UserForm>({
    mode: "onChange",
    defaultValues: {},
  });
    const { mutate, isPending: isLoading } =
    useInsertNewUserMutation({
      onSuccess: (data) => {
         toast({
          title: "Account succesfully created",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        typeof window !== "undefined" &&
    window.localStorage.removeItem("isLogged")
        router.push('/login');
      },
      onError: (error) => {
        toast({
          title: "Error Occurred while creating account",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      },
    });

  const handleSave = () => {
     mutate({
      FirstName: getValues().FirstName,
      LastName:getValues().LastName,
      Password:getValues().Password,
      Email:getValues().Email
    });
  };

  return {
    errors,
    register,
    handleSave,
    handleSubmit,
    watch,
    setError,
    isLoading,
    isValid,
    // value: getValues().name,
  };
}
