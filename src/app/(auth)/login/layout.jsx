import { ModeToggle } from "@/components/ModeToggle";

export default function LayuotAuth({children}){
    return(
        <div className="w-screen h-screen flex items-center justify-center p-6">
            <ModeToggle/>
            {children}
        </div>
    )
}