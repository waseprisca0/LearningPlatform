"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { BookOpen } from "phosphor-react";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/router' 
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  useInsertNewUserMutation
} from "../../generated/graphql";
// import { useRouter } from "next/router";
import Image from 'next/image';
import { useToast } from "@chakra-ui/react";
import loadingGIf from "../../assets/loading.gif"
import Link from "next/link";
import useAddNewUser from './hook/useRegister';

export default function LeftSide() {
  const {
    handleSave,
    errors,
    handleSubmit,
    isLoading,
    register,
    isValid,
    watch,
    setError
  } = useAddNewUser();
 const password = watch('Password');
 const confirmPassword = watch('cpassword');

 const onSubmit = (data:any) => {
    if (password.length < 5) {
      setError('Password', {
        type: 'manual',
        message: 'Password is too short'
      });
    } else if (password !== confirmPassword) {
      setError('cpassword', {
        type: 'manual',
        message: 'Passwords do not match'
      });
    } else {
   handleSave()
    }
 };

 return (
    <div className="w-[100%] md:w-[60%] lg:w-[40%]  h-lvh flex justify-center bg-[#ae53a6] text-white">
      <div className="w-[100%] flex flex-col items-col items-center justify-center">
        <Link href={'/'}>
          <div className="flex items-center text-[1.7rem] mb-9 gap-1">
            <BookOpen className="h-[2rem] w-[2rem] text-white" weight="bold"/>
            <p className=" font-semibold">Learning Platform</p>
          </div>
        </Link>
        <div className="text-[1.4rem]">
          <h4>Register to our App</h4>
        </div>
        <div className="myform w-[70%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col lg:flex-row justify-between mt-9">
              <div className="text-black">
                <Label className="text-white" htmlFor="firstName">First Name</Label>
                <Input {...register("FirstName")} type="text" id="firstName" placeholder="Username" />
              </div>
              <div className="text-black">
                <Label className="text-white" htmlFor="lastName">Last Name</Label>
                <Input {...register("LastName")} type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="text-black my-9">
              <Label className="text-white" htmlFor="email">Email</Label>
              <Input {...register("Email", {
                required: "Email is required",
                pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                 message: "Invalid email address"
                }
              })} type="email" id="email" placeholder="Email" />
              {errors.Email && <p className="text-[#eee] text-xs">Invalid Email</p>}
            </div>
            <div className="text-black my-9">
              <Label className="text-white" htmlFor="password">Password</Label>
              <Input {...register("Password")} type="password" id="password" placeholder="Password" />
              {errors.Password && <p className="text-[#eee] text-xs">Password too short</p>}
            </div>
            <div className="text-black my-9">
              <Label className="text-white" htmlFor="cpassword">Confirm Password</Label>
              <Input {...register("cpassword")} type="password" id="cpassword" placeholder="Confirm password" />
              {errors.cpassword && <p className="text-[#eee] text-xs">Passwords not matching</p>}
            </div>
            <div>
              <Button type="submit" className="w-[100%] bg-[#502779] hover:bg-[#502779a9] text-[white]">{isLoading?<Image alt='Saving....' src={loadingGIf} height={29}/>:'Register'}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
 );
}
