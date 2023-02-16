import React from 'react'
import './style.css'
import logo from '../../assets/Images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChalkboard, faBell, faBullhorn, faBook } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const togglerHandler = () => {
    const elm = document.getElementById('sidebar');
    if (elm) {
      elm.classList.toggle('active')
    }
  }
  return (
    <div className='db-header'>
      <ul className='db-headmain d-flex justify-content-between'>
        <div className='d-flex text-dark align-items-center bars'>
          <li onClick={togglerHandler}><FontAwesomeIcon icon={faBars} className='bars-head' /></li>
        </div>
        <div className='d-flex bell'>
          <li className='bell-like'><FontAwesomeIcon icon={faBell} /><span className='bell-mess'>2</span></li>
          <li className='bell-like bell-more'><FontAwesomeIcon icon={faBullhorn} /><span className='bullhorn'>0</span></li>
          <li><FontAwesomeIcon icon={faBook} /></li>
        </div>
      </ul>
    </div>
  )
}

export default Header
