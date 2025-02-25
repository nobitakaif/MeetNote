"use client"
import { Button } from "@/components/ui/button";
import  {useUser}  from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
    const {user} = useUser()
    return (
        <>
        <div className="h-screen min-w-full relative pt-72 left-[100%] ">
            <h1 className="text-2xl">Welcome to our Space "username"</h1>
            <Button className="relative left-32"><PlusCircle className=""></PlusCircle> create note</Button>
        </div>
      </>
    );
  };

export default Dashboard