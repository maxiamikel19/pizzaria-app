import { categories } from "../data/categories"
import Category from "./Category"
export default function Sidebar(){
    return (
        <aside className="md:w-72">
            <div className="p-2">
                <img 
                    src="../img/logo-01.png" 
                    alt="Pizzaria foto" 
                    className="w-80"
                />
            </div>

            <div className="mt-4">
                <h1 className="text-2xl text-center p-2">Todas as categorias</h1>
                {categories.map( category => (
                    <Category 
                        key={category.id}
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
        </aside>
    )
}