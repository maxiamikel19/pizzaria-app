import usePizzaria from "../hooks/usePizzaria"
import { moneyFormatter } from "../helpers"
import { useState, useEffect } from "react"


export default function ProductModal(){

    const {product, handlerClickModal, handleAddProduct, order} = usePizzaria()
    const [quantity, setQuantity] = useState(1)
    const [edit, setEdit] = useState(false)

    useEffect(() =>{
        if(order.some(orderState => orderState.id === product.id)){
            const produtEdit = order.filter(orderState => orderState.id === product.id)[0]
            setQuantity(produtEdit.quantity)
            setEdit(true)
        }
    },[order]
    )

    const plusQuantity = () => {
        if(quantity == 10){
            return
        }
        return setQuantity(quantity + 1)
    }

    const minusQuantity = () => {
        if(quantity <= 1){
            return
        }
        return setQuantity(quantity - 1)
    }

   // console.log(product.name)
    return(
        <div className="gap-10 md:flex">
            <div className="md:w-2/3">
                <img src={`../img/${product.foto}`} alt={`${product.name}`} className="w-full h-auto" />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end" onClick={handlerClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

                <h2 className="text-lg font-bold font-mono">{product.name}</h2>
                <hr />
                <p className="mt-5 mb-5">{product.description}</p>

                <div className="flex mb-5 text-center">
                    <p className="mt-5 font-black text-2xl font-serif">
                        Total: <span className=" text-amber-500">R{moneyFormatter(product.price)}</span>
                    </p> 
                </div>
                

                <div className="text-2xl flex w-1/6 justify-between">
                    <button type="button" className="text-sm mr-3" onClick={() => plusQuantity()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button> 
                        
                    <p className="text-amber-500 font-serif font-bold"> {quantity} </p>

                    <button type="button" className="text-sm ml-3" onClick={() => minusQuantity()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                 </div>
            
                <button 
                    className="text-center bg-rose-600 w-full mt-4 p-3 font-bold truncate  text-white rounded"
                    type="button"
                    onClick={() => {handleAddProduct({quantity,...product }), handlerClickModal()}}
                >
                    {edit ? 'Salvar' : ' Adicionar no carrinho'}
                </button>
            </div>
        </div>
    )
}