import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Layout(){
    return (
        <div>
            <h1>Layout</h1>
            <Link to="/auth/register">Register</Link>
            <br />
            <Link to="/auth/login">Login</Link>
            <Outlet />
        </div>
    )
}