"use client"

import { ModeToggle } from "@/components/mode.toggle"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import Link from "next/link"

export function Navbar (){
    const {isAuthenticated,isLoading} =useConvexAuth()
    return <div className="w-full flex justify-between border-b light:border-white pt-3 px-4 lg:px-6">
        <Logo/>

        <div className="flex w-72 justify-between lg:px-5 ">
            {isLoading && (
                <Spinner/>
            )}
            <ModeToggle/>
            {!isAuthenticated && !isLoading && (
                <>
                    <SignInButton mode="modal">
                        <Button variant={"ghost"}>Log in</Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                        <Button >Get new Plan</Button>
                    </SignInButton>
                </>
            ) }
            {isAuthenticated && !isLoading &&(
                <div className="h-8 w-28  flex items-center lg:mr-3 lg:mt-1  ">
                    <div className="flex w-full justify-between items-center m">
                    <Button><Link href={'/dashboard'}>Dashboard</Link></Button>
                     <UserButton/>
                     </div>
                </div>
            )}
            
        </div>
    </div> 
}

function Logo(){
    return <div>
        <img src="/logo.svg" className="h-14  block cursor-pointer dark:hidden " />
        <img src="/logo234.png" className="h-14 cursor-pointer hidden dark:block " />
    </div>
}