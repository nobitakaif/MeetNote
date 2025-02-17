import { ModeToggle } from "@/components/mode-theme/mode.theme";

export function Navbar (){
    return <div className="w-full flex lg:p-3 md:p-3 p-2 justify-between border-b light:border-white">
        <Logo />
        <ModeToggle/>
    </div> 
}

function Logo(){
    return <div>
        <img src="/logo.svg" className="h-14  block cursor-pointer dark:hidden " />
        <img src="/logo234.png" className="h-14 cursor-pointer hidden dark:block " />
    </div>
}