import usePizzaria from "../hooks/usePizzaria"
import { moneyFormatter } from "../helpers"

export default function ProductModal(){

    const {product, handlerClickModal} = usePizzaria()

   // console.log(product.name)
    return(
        <div className="gap-10 md:flex">
            <div className="md:w-2/3">
                <img src={`../img/${product.foto}`} alt={`${product.name}`} className="w-1/2 h-auto" />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end" onClick={handlerClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

                <h2 className="text-lg font-bold font-mono">{product.name}</h2>
                <hr />
                <p className="mt-5 mb-5">{product.description}</p>
                <p className="mt-5 font-black text-2xl text-amber-500 font-serif">
                    {moneyFormatter(product.price)}
                </p>
                <hr />
                <button className="text-lg font-normal cursor-pointer truncate rounded-xl mt-10 flex bg-rose-500 hover:bg-rose-700 pt-3 pb-3 pl-5 pr-5 text-center" type="button">
                    Levar para o carrinho
                </button>
            </div>
        </div>
    )
}