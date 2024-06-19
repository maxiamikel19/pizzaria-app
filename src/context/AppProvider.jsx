import { createContext, useEffect, useState } from "react";
import { categories as categoryList } from "../data/categories"

import { toast } from "react-toastify"
import 'react-toastify/ReactToastify.css'


const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [categories, setCategories] = useState(categoryList);
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

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
    
    const handleAddProduct = ({category_id, description,...product}) => {
        if(order.some(orderState => orderState.id === product.id)){
            const updatedOrder = order.map(orderState => orderState.id === product.id ? product : orderState)
            setOrder(updatedOrder)
            toast('Produto editado com sucesso')
        }else{
            setOrder([...order, product])
            toast.success('Produto adicionado ao carrinho')
        }
    }

    const handleEditarProductOrderQuantity = id => {
        const updatedProduct = order.filter(product => product.id === id)[0]
        setProduct(updatedProduct)
        setModal(!modal)
    }

    const handleDeleteProductOrder = id => {
        const updatedOrder = order.filter(product => product.id !== id)
        setOrder(updatedOrder)
        toast.success('Produto elominado com sucesso')
    }

    useEffect( () => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)

    }, [order])
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
                handleAddProduct,
                handleEditarProductOrderQuantity,
                handleDeleteProductOrder,
                total
            }}
        >{children}</AppContext.Provider>
    )
}
export{
    AppProvider
}
export default AppContext