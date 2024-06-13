import { categories } from "../data/categories"
import { Link } from "react-router-dom"
import Category from "./Category"
export default function Sidebar(){
    return (
        <div className="md:w-72">
            <div className="p-2">
                <img 
                    src="../img/logo.png" 
                    alt="Pizzaria foto" 
                    className="w-80"
                />
            </div>

            <div className="mt-4">
                <h1 className="text-2xl text-center p-2">Explore our categories</h1>
                {categories.map( category => (
                    <Category 
                        category = {category}
                    />
                ))}
            </div>

            <div className="my-5 py-5">
                <button 
                    type="button" 
                    className="text-center bg-rose-600 w-full p-3 font-bold truncate  text-white"
                >
                    Cancel Order
                </button>
            </div>
        </div>
    )
}