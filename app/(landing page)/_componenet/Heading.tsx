

import { Button } from "@/components/ui/button"
import {ArrowRight} from "lucide-react"

const Heading=()=>{
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-4xl font-bold   ">
                your ideas, documentes & plan. Unified Welcome to <span className="underline">MeetNote</span>
            </h1>
            <h3 className="text-sm lg:2xl sm:text-3xl md:text-2xl">
                MeetNote is the connected workspace where<br />
                better, faster work happens
            </h3 >
            <Button className="p-5">Get Start <ArrowRight></ArrowRight> </Button>
            
        </div>
    )
}

export default Heading