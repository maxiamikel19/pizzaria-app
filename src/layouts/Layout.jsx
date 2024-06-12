import { Outlet } from "react-router-dom"
export default function Layout(){
    return (
        <div>
            <h1>Layout</h1>
            <a href="/auth/register">Regist</a>
            <Outlet />
        </div>
    )
}