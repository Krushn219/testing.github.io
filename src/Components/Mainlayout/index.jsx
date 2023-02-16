import React, { useState } from 'react'
import './style.css'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'

const Mainlayout = () => {
  const [activeTab, setactiveTab] = useState(0)
  return (
    <div className='d-flex'>
      <div className="col-2">
        <Sidebar setactiveTab={setactiveTab} activeTab={activeTab} />
      </div>
      <div className="col-10">
        <Header />
      </div>
    </div>
  )
}

export default Mainlayout
