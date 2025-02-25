"use client"
import { Spinner } from "@/components/ui/spinner"
import { useConvexAuth } from "convex/react"
import { redirect } from "next/navigation"
import { Navigation } from "./_component/navigation"


const MainLayout = ({
    children
}:{
    children:React.ReactNode
}) =>{
    const { isAuthenticated , isLoading } = useConvexAuth()

    if(isLoading){
        return <div className="flex justify-center items-center h-screen w-full">
            <Spinner size={"lg"}/>
        </div>
    }
    
    if(!isAuthenticated){
        return redirect("/")
    }
    return (

        <div className=" flex ">
            <Navigation/>
            <main>
                {children}
            </main>

        </div>
    )
}

export default MainLayout