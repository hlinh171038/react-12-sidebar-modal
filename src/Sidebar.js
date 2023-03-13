import React from 'react'
import logo from './logo.svg'
import { AiFillCloseCircle } from "react-icons/ai";
import {links,social} from './data.js'
import { useGlobalContext } from './context';

function SideBar() {
  const {isSideBar,handleCloseSideBar} = useGlobalContext();
  return (
    <div className={isSideBar ? "slide-container show-sidebar":"silde-container"}>
      <div className='header-container'>
        <img src={logo} alt="logo"/>
        <button className='close-btn' onClick={handleCloseSideBar}>
          <AiFillCloseCircle/>
        </button>
      </div>
      <ul className='links'>
          {links.map(link =>{
            const {id,url,text,icon} = link;
            return <li key={id}>
              {icon}
              <a href={url}>{text}</a>
            </li>
          })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideBar
