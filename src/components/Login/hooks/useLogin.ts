
import {
  useLoginCheckQuery,
  LoginCheckQuery
} from "../../../generated/graphql";
import { useForm } from 'react-hook-form';
interface UserLoginForm {
  Email:string;
  Password:string,
}

export default function useLoginUser() {
  
     const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    getValues,
  } = useForm<UserLoginForm>({
    mode: "onChange",
    defaultValues: {},
  });

    const { data,isPending:isLoading,refetch } = useLoginCheckQuery<
    LoginCheckQuery,
    Error
  >(
    {
        Email:getValues().Email,
        Password:getValues().Password
    }
   
  );

  return {
    data,
    isLoading,
    refetch,
     errors,
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    isValid,
    mypassword:getValues().Password,
    myEmail:getValues().Email
  };
}
