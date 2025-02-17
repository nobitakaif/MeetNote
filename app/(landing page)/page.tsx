"use client"
import Heading from "./_componenet/Heading"
import { Navbar } from "./_componenet/navbar"

const LandingPage=()=>{
    return (
        <div className="min-h-screen flex flex-col ">
            
            <Navbar/>
            <div className="flex flex-col items-center justify-center  md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 ">
            
            <Heading/>
            
            </div>
            
        </div>
    )
}
export default LandingPage