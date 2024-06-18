import { createContext, useState } from "react";
import { categories as categoryList } from "../data/categories"


const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [categories, setCategories] = useState(categoryList);
    const [selectedCategory, setSelectedCategory] = useState(categories[0])

    const handleClickCategory  = (id) => {
        const category = categories.filter(category => category.id === id)[0]
        setSelectedCategory(category)
        //console.log(category)
    }
    
    return(
        <AppContext.Provider
            value={{
                categories,
                selectedCategory,
                handleClickCategory
            }}
        >{children}</AppContext.Provider>
    )
}
export{
    AppProvider
}
export default AppContext