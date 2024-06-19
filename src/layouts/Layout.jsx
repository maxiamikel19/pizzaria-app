import { Outlet } from "react-router-dom"
import Modal from "react-modal"
import Sidebar from "../components/Sidebar"
import Resume from "../components/Resume"
import usePizzaria from "../hooks/usePizzaria"
import ProductModal from "../components/ProductModal"
import { ToastContainer } from "react-toastify"


 Modal.setAppElement('#root')
export default function Layout(){

   

    const {modal} = usePizzaria()
    //console.log(modal)
    return (
        <>
            <div className="md:flex">
                <Sidebar />
                <main className="flex-1 border h-screen overflow-y-scroll p-2 bg-slate-100">
                        <Outlet />
                </main>
                <Resume />
            </div>
            {modal &&(
                <Modal isOpen={modal}  className="w-1/2 h-auto flex m-auto bg-white p-8 mt-7 border border-gray-500 rounded-md">
                    <ProductModal />
                </Modal>
            )}

            <ToastContainer />
        </>
    )
}