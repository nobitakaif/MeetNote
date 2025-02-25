"use client"

import { ChevronRight, ChevronsLeft, Copyright, Home } from "lucide-react"
import { useState } from "react"

export const Navigation =()=>{
    const [navOn, setNavOn] =useState(true)
    
    function isNav(){
        if( window.innerWidth > 720){
            setNavOn(false)
        }
        setNavOn(!navOn)
    }

    return <>
    {navOn ? <aside 
       className="group/sidebar h-screen bg-secondary  overflow-y-auto relative flex w-60 flex-col bg-gray-200"
       >
        <div role="button" className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute
        top-3 right-2 opacity-0 group-hover/sidebar:opacity-100
        ">
            <ChevronsLeft className="h-6 w-6" onClick={isNav}/>
            
        </div>
         <div className="p-5 m-6 flex justify-between h-screen flex-col">
            <div className="h-72 flex flex-col justify-between  ">
            <div className="flex">
                <Home className="cursor-pointer"/>
                <p className="pl-4 cursor-pointer">Home</p>
            </div>
            <div className="flex">
                <Home className="cursor-pointer"/>
                <p className="pl-4 cursor-pointer">Home</p>
            </div>
            <div  className="flex">
                <Home className="cursor-pointer"/>
                <p className="pl-4 cursor-pointer">Home</p>
            </div>
            <div className="flex">
                <Home className="cursor-pointer"/>
                <p className="pl-4 cursor-pointer">Home</p>
            </div>
            <div  className="flex">
                <Home className="cursor-pointer"/>
                <p className="pl-4 cursor-pointer">Home</p>
            </div>
            <div className="flex">
                <Home className="cursor-pointer"/>
                <p className="pl-4 cursor-pointer">Home</p>
            </div>
            </div>
            <div className="flex gap-1">
                <Copyright/>copyright
            </div>
        </div>
        <div 
         className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-screen w-1 bg-primary/10 right-0 top-0"
        />
      
       </aside> : <ChevronRight onClick={isNav} className="m-3 cursor-pointer"/>}
       
       
    </>
}




export const Navigation2 =()=>{
    return <>
        <div className="h-screen w-60 bg-gray-100 border-b hover:bg-gray-200 curso-ew-resize hover:outline outline-gray-300 ">
            Navigation
        </div>
    </>
}



// import React, { useState } from "react";
// import { Resizable } from "react-resizable";
// import "react-resizable/css/styles.css";

// const Sidebar = () => {
//   const [width, setWidth] = useState(250);

//   const handleResize = (event, { size }) => {
//     setWidth(size.width);
//   };

//   return (
//     <div className="flex h-screen">
//       <Resizable
//         width={width}
//         height={Infinity}
//         axis="x"
//         onResize={handleResize}
//         minConstraints={[200, 0]}
//         maxConstraints={[400, 0]}
//       >
//         <div className="bg-gray-800 text-white p-4 flex flex-col" style={{ width }}>
//           <h2 className="text-xl font-bold">Sidebar</h2>
//           <ul className="mt-4 space-y-2">
//             <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Item 1</li>
//             <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Item 2</li>
//             <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Item 3</li>
//           </ul>
//         </div>
//       </Resizable>
//       <div className="flex-1 p-4">Main Content Area</div>
//     </div>
//   );
// };
// export default Sidebar;

