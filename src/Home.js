import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const {openModal,handleOpenSideBar} = useGlobalContext()
  return <main className='main-container'>
          <button  className='sidebar-toggle' onClick={handleOpenSideBar}>
            <FaBars />
          </button>
          <button  className='main-btn' onClick={openModal}>
            show modal
          </button>
        </main>
}

export default Home
