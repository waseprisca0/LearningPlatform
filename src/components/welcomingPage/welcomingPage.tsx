'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import square from '../assets/squareBox.webp';
import { BookOpen } from "phosphor-react";
import LoginPage from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import Course from "@/components/Course";
import OpenAiPage from "@/components/OpenAi/OpenAi";

export default function WelcomingPage() {
 const [isLogged, setIsLogged] = useState(false);

 useEffect(() => {
    // This function runs after the component mounts, ensuring it's in a client-side context
    const checkLoginStatus = () => {
      if (typeof window !== "undefined") {
        const loggedIn = localStorage.getItem('isLogged');
        setIsLogged(loggedIn === 'true');
      }
    };

    checkLoginStatus();
 }, []); // Empty dependency array ensures this runs only once after mount

 return (
    <div>
      <Dashboard isLogged={isLogged} />
      <OpenAiPage />
      <div className="w-full mt-[4rem]">
        <Course />
      </div>
    </div>
 );
}
