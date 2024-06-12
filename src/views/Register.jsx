import { Link } from "react-router-dom"

export default function Register(){
    return (
        <>
            <h1 className="text-black text-3xl">User Register</h1>
            <p>Create your account filling the form</p>

            <div className="bg-white mt-7 py-10">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-slate-800">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Ex: Amikel Maxi Celestin B" className="w-full mt-2 p-3 bg-gray-200"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-slate-800">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Ex: amikel@pizzaria.com" className="w-full mt-2 p-3 bg-gray-200"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-slate-800">Password:</label>
                        <input type="password" id="password" name="password" placeholder="******" className="w-full mt-2 p-3 bg-gray-200"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="text-slate-800">Password confirm:</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" placeholder="******" className="w-full mt-2 p-3 bg-gray-200"/>
                    </div>

                    <input 
                        type="submit" 
                        className="bg-slate-600 hover:bg-slate-900 text-white w-full mt-5 p-3 uppercase rounded cursor-pointer font-bold"
                        value="Register"
                    />
                </form>
            </div>
            <nav className="mt-2 text-center">
                <Link to="/auth/login" className="text-sm text-gray-500 hover:text-gray-800">You have an account? </Link>
            </nav>
        </>
    )
}