import { moneyFormatter } from "../helpers"

export default function Product({product}){
    return (
        <div className="border p-3 shadow bg-white">
           <img 
            src={`../img/${product.foto}`} 
            alt={`Image ${product.name}`} 
            className="w-full h-36"
        />
        <div className="p-5">
            <h2 className="text-lg font-bold font-mono">{product.name}</h2>
            <p className="mt-5 font-black text-2xl text-amber-500 font-serif">
                {moneyFormatter(product.price)}
            </p>

            <button 
                type="button"
                className="text-center bg-rose-600 w-full mt-4 p-3 font-bold truncate  text-white rounded"
            >
                Escolher
            </button>
        </div>
        </div>
    )
}