import React from 'react'
import './style.css'
import logo from '../../assets/Images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboard, faImage, faNewspaper, faCogs, faCube, faCartShopping, faCreditCard, faMoneyBillAlt, faRetweet, faLifeRing, faUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

const Sidebar = ({ activeTab, setactiveTab }) => {
  return (
    <div id='sidebar' className='sidebar'>
      <div className='sidebar-logo-main'>
        <div className='dblogo-name'>
          <img src={logo} className='img-fluid' alt='img' />
        </div>
      </div>
      <ul>
        <li>APPLICATION</li>
        <li className={classNames({ active: activeTab === 0 })} onClick={() => setactiveTab(0)}><FontAwesomeIcon icon={faChalkboard} />Dashboard</li>
        <li className={classNames({ active: activeTab === 1 })} onClick={() => setactiveTab(1)}><FontAwesomeIcon icon={faImage} />Catelog</li>
        <div>
          <li>Products List</li>
          <li>Products</li>
          <li>Categories List</li>
          <li>Category</li>
        </div>
        <li className={classNames({ active: activeTab === 2 })} onClick={() => setactiveTab(2)}><FontAwesomeIcon icon={faUser} />Customers</li>
        <div>
          <li>Customers List</li>
          <li>Customer</li>
        </div>
        <li className={classNames({ active: activeTab === 3 })} onClick={() => setactiveTab(3)}><FontAwesomeIcon icon={faCartShopping} />Orders</li>
        <div>
          <li>Orders List</li>
          <li>Order Details</li>
        </div>
        <li className={classNames({ active: activeTab === 4 })} onClick={() => setactiveTab(4)}><FontAwesomeIcon icon={faUser} />Marketing</li>
        <div>
          <li>Coupons List</li>
          <li>Coupon</li>
        </div>
        <li className={classNames({ active: activeTab === 5 })} onClick={() => setactiveTab(5)}><FontAwesomeIcon icon={faRetweet} />Inbox</li>
        <div>
          <li>List</li>
          <li>Conversation</li>
        </div>
        <li className={classNames({ active: activeTab === 6 })} onClick={() => setactiveTab(6)}><FontAwesomeIcon icon={faMessage} />Chat</li>
        <li className={classNames({ active: activeTab === 7 })} onClick={() => setactiveTab(7)}><FontAwesomeIcon icon={faCreditCard} />File Manager</li>
        <li className={classNames({ active: activeTab === 8 })} onClick={() => setactiveTab(8)}><FontAwesomeIcon icon={faNewspaper} />Calender</li>
        <li className={classNames({ active: activeTab === 9 })} onClick={() => setactiveTab(9)}><FontAwesomeIcon icon={faMoneyBillAlt} />Analytics</li>
        <li className={classNames({ active: activeTab === 10 })} onClick={() => setactiveTab(10)}><FontAwesomeIcon icon={faCogs} />Settings</li>
        <div>
          <li>Table of Content</li>
          <li>Form</li>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
