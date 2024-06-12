import { Outlet } from "react-router-dom"


export default function AuthLayout(){
    return (
        <div>
            <h1>Default Layout</h1>

            <Outlet />
        </div>
    )
}