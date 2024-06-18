import { products as data } from "../data/product"
import Product from "../components/Product"
import usePizzaria from "../hooks/usePizzaria"


export default function Home(){

    const {selectedCategory} = usePizzaria()
    const products = data.filter(product => product.category_id === selectedCategory.id)
    return (
        <>
            <h1 className="text-2xl font-black">Productos :{selectedCategory.name}</h1>
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