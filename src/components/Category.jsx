import usePizzaria from "../hooks/usePizzaria"

export default function Category({category}){
    //console.log(category)

    const {handleClickCategory, selectedCategory} = usePizzaria();

    return (
        <div className={` ${selectedCategory.id === category.id ? 'bg-rose-600' : 'bg-white'} p-2 items-center gap-4 w-full  flex border cursor-pointer hover:bg-rose-600`}>
            <img 
                src={`/img/${category.foto}`}
                alt="Category icon"
                className="w-12 h-10"
            />
            <button className="text-lg font-bold cursor-pointer truncate  w-full flex" type="button" onClick={() => handleClickCategory(category.id)}>
                {category.name}
            </button>
        </div>
    )
}