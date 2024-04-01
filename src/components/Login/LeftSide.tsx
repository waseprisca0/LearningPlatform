import React, { useState, useEffect } from 'react';
import { BookOpen } from "phosphor-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Corrected import path

import loadingGIf from "../../assets/loading.gif"
import Image from 'next/image';
import useLoginUser from './hooks/useLogin';

export default function LeftSide() {
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const router = useRouter();
    const {
        errors,
        data,
        handleSubmit,
        register,
        isValid,
        watch,
        mypassword,
        myEmail,
        reset,
        refetch,
        setError
    } = useLoginUser();

 useEffect(() => {
    if (data?.User.length) {
      // Perform your redirect logic here
      data?.User[0].Role === 1 ? router.push('/careers') : router.push('/admin/dashboard');
      // Set local storage items
      if (typeof window !== "undefined") {
        window.localStorage.setItem("isLogged", 'true');
        window.localStorage.setItem("role", `${data.User[0].Role}`);
        window.localStorage.setItem("userId", `${data?.User[0].Id}`);
      }
      // Reset form
      reset({
        Email: '',
        Password: '',
      });
    } else {
      // Handle error case
      if(mypassword && isSubmitting){
        setError('Password', {
        type: 'manual',
        message: 'Email or password incorrect'
      });
      }
    }
 }, [data]); // Empty dependency array ensures this runs only once after mount

 const onSubmit = () => {
    setIsLoading(true);
    setIsSubmitting(true)
    if (data?.User.length) {
        setIsLoading(false);
        data?.User[0].Role ===1 ? router.push('/careers'):router.push('/admin/dashboard');
        if (typeof window !== "undefined") {
            window.localStorage.setItem("isLogged", 'true')
            window.localStorage.setItem("role", `${data.User[0].Role}`)
            window.localStorage.setItem("userId", `${data?.User[0].Id}`)
        }
        reset({
            Email: '',
            Password: '',
        });
    } else {
        setIsLoading(false);
        setError('Password', {
            type: 'manual',
            message: 'Email or password incorrect'
        });
    }
 };

 return (
    <div className="w-[100%] lg:w-[40%] h-lvh flex justify-center bg-[#ae53a6] text-white">
      <div className="w-[100%] flex flex-col items-col items-center justify-center">
        <Link href={'/'}>
          <div className="flex items-center text-[1.7rem] mb-9 gap-1">
            <BookOpen className="h-[2rem] w-[2rem] text-white" weight="bold"/>
            <p className=" font-semibold">FutureForge Hub</p>
          </div>
        </Link>
        <div className="text-[1.4rem]">
          <h4>Welcome to our App</h4>
        </div>
        <div className="myform w-[70%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-black my-9">
              <Label className="text-white" htmlFor="email">Email</Label>
              <Input {...register("Email", {
                required: "Email is required",
                pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                 message: "Invalid email address"
                }
              })} type="email" id="email" placeholder="Email" />
              {errors.Email && <p className="text-[#eee] font-medium text-xs">Invalid Email</p>}
            </div>
            <div className="text-black my-9">
              <Label className="text-white" htmlFor="password">Password</Label>
              <Input {...register("Password", { required: "Password is required" })} type="password" id="password" placeholder="Password" />
              {errors.Password && <p className="text-[#eee] font-medium text-xs">{errors.Password.message as any}</p>}
            </div>
            <div className="flex justify-between my-9">
              <p>
                Forgot password?
              </p>
              <Link href={'/register'}>
                Register
              </Link>
            </div>
            <div>
              <Button type="submit" className="w-[100%] bg-[#502779] hover:bg-[#502779a9] text-[white]">{isLoading?<Image alt='Saving....' src={loadingGIf} height={25}/>:'Login'}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
 );
}
