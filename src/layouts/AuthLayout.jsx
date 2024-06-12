import { Outlet } from "react-router-dom"


export default function AuthLayout(){
    return (
        <main className="max-w-4xl m-auto mt-9 md:mt-9 flex flex-col md:flex-row items-center">
            <img 
                src="../img/logo_1.png" 
                alt="Spies Pizzaria" 
                className="max-w-xs"
            />
            <div className="w-full p-10 bg-white-200 shadow-2xl">
                 <Outlet />
            </div>
           
        </main>
    )
}