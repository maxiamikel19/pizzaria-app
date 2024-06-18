import { products } from "../data/product"
import Product from "../components/Product"
import usePizzaria from "../hooks/usePuzzaria"


export default function Home(){

    const {test} = usePizzaria()
    console.log(test)
    return (
        <>
            <h1 className="text-2xl font-black">Productos</h1>
            <p className="text-lg">Selecione e monte seu pedido</p>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
               {products.map(product => (
                    // <p>{product.name}</p>
                    <Product 
                        key={product.foto}
                        product={product}
                    />
                    
                ))} 
            </div>
            
        </>
    )
}