import { Link } from "react-router-dom"

export default function Login(){
    return (
        <>
            <h1 className="text-black text-3xl">User Login</h1>
            <p>Access to your account to order</p>

            <div className="bg-white mt-7 py-10">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="text-slate-800">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Ex: amikel@pizzaria.com" className="w-full mt-2 p-3 bg-gray-200"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-slate-800">Password:</label>
                        <input type="password" id="password" name="password" placeholder="******" className="w-full mt-2 p-3 bg-gray-200"/>
                    </div>

                    <input 
                        type="submit" 
                        className="bg-slate-600 hover:bg-slate-900 text-white w-full mt-5 p-3 uppercase rounded cursor-pointer font-bold"
                        value="Login"
                    />
                </form>
            </div>

            <nav className="mt-2 text-center ">
                <Link to="/auth/register" className="text-sm text-gray-500 hover:text-gray-800">You don't have an account? </Link>
            </nav>
        </>
    )
}