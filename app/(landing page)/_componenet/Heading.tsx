"use client"

import { Button } from "@/components/ui/button"
import { SignInButton, useUser } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import {ArrowRight, Router} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"

const Heading=()=>{
    const {isAuthenticated,isLoading} = useConvexAuth()
    const { isSignedIn } = useUser();
    
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-4xl font-bold   ">
                your ideas, Documents <br/> & plan. Unified <br></br>Welcome to <span className="underline">MeetNote</span>
            </h1>
            <h3 className="text-sm lg:2xl sm:text-3xl md:text-2xl">
                MeetNote is the connected workspace where<br />
                better, faster work happens
            </h3 >
            {isAuthenticated && !isLoading &&  (
                
                <Button className="p-5" asChild>
                    <Link href={"/dashboard"}> Get Start
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                 </Button>
                
            )}
            {!isAuthenticated && !isLoading &&(
                <div>
                    <SignInButton mode="modal" >
                    
                        <Button >Get Start <ArrowRight></ArrowRight><Link href={'/dashboard'}> </Link></Button>
                        
                    </SignInButton>
                </div>
            )}
           
        </div>
    )
}

export default Heading