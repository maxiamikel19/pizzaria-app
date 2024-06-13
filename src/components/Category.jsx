export default function Category({category}){
    console.log(category)
    return (
        <div className="p-2 items-center gap-4 w-full hover:bg-rose-600 flex border cursor-pointer">
            <img 
                src={`/img/${category.foto}`}
                alt="Category icon"
                className="w-12"
            />
            <p className="text-lg font-bold cursor-pointer truncate">{category.name}</p>
        </div>
    )
}