"use client"
import Heading from "./_componenet/Heading"

import { Navbar } from "./_componenet/navbar"
import { Butcherman } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const LandingPage=()=>{
    return (
        <div className="flex flex-col ">
             <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 ">
          
            <Navbar/>
            <Heading/>
            
            </div>
            
        </div>
    )
}
export default LandingPage