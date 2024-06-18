import { Outlet } from "react-router-dom"
import Modal from "react-modal"
import Sidebar from "../components/Sidebar"
import Resume from "../components/Resume"
import usePizzaria from "../hooks/usePizzaria"
import ProductModal from "../components/ProductModal"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      with: '50%'
    },
  };

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
                <Modal isOpen={modal} style={{customStyles}}>
                    <ProductModal />
                </Modal>
            )}
        </>
    )
}