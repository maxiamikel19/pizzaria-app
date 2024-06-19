import { createContext, useState } from "react";
import { categories as categoryList } from "../data/categories"


const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [categories, setCategories] = useState(categoryList);
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])

    const handleClickCategory  = (id) => {
        const category = categories.filter(category => category.id === id)[0]
        setSelectedCategory(category)
        //console.log(category)
    }

    const handlerClickModal = () =>{
        setModal(!modal )
    }

    const handleSetProduct = product =>{
        setProduct(product)
       // console.log(product)
    }
    
    const handleAddProduct = ({category_id, foto, description,...product}) => {
        if(order.some(orderState => orderState.id === product.id)){
            const updatedOrder = order.map(orderState => orderState.id === product.id ? product : orderState)
            setOrder(updatedOrder)
        }else{
            setOrder([...order, product])
        }
    }
    return(
        <AppContext.Provider
            value={{
                categories,
                selectedCategory,
                handleClickCategory,
                modal,
                handlerClickModal,
                product,
                handleSetProduct,
                order,
                handleAddProduct
            }}
        >{children}</AppContext.Provider>
    )
}
export{
    AppProvider
}
export default AppContext