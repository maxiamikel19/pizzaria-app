import { useContext } from "react";
import AppContext from "../context/AppProvider";

const usePizzaria = () =>{
    return useContext(AppContext)
}

export default usePizzaria