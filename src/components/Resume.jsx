import usePizzaria from "../hooks/usePizzaria";
import ProductResume from "./ProducrResume"

export default function Resume(){

    const {order} = usePizzaria();
    return (
        <aside className="md:w-72 h-screen border overflow-y-scroll p-5 flex-wrap">
            <h1 className="text-3xl font-black text-center border-b">Pedido</h1>
            <p className="text-normal text-center p-3">Detalhes de pedidos</p>

            <div className="block">
                {order.length === 0 ? (
                    <div className="flex">
                        <p className="text-center text-xl bg-rose-500" >A sua lista de compra ainda está vasia!</p>
                    </div>
                ) : (
                        order.map(product => (
                            <ProductResume 
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}
            </div>

           <p> Total: {''} </p>

           <form className="w-full">
            <div className="mt-5">
                <input 
                    type="submit" 
                    value="Confirmar pedido"
                    className="text-center bg-rose-600 w-full mt-4 p-3 font-bold truncate  text-white rounded cursor-pointer"
                />
            </div>
           </form>
           
        </aside>
    )
}