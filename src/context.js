import React,{useState, useContext} from 'react'

const AppContext = React.createContext();

const AppProvider =({children}) =>{
    const [isSideBar, setIsSideBar] = useState(false)
    const [isModal,setIsModal] = useState(false)

    const openModal = ()=>{
        setIsModal(true)
    }
    const closeModal = ()=>{
        setIsModal(false)
    }
    const handleOpenSideBar =()=>{
        setIsSideBar(true);
    }
    const handleCloseSideBar =()=>{
        setIsSideBar(false);
    }
    return <AppContext.Provider
        value={{
                isModal,
                setIsModal,
                openModal,
                closeModal,
                isSideBar,
                handleOpenSideBar,
                handleCloseSideBar
        }}
    >
        {children}
    </AppContext.Provider>
}
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalContext};