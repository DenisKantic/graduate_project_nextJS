"use client"
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css'


const Navigation = () => {
  return (
    <nav className='w-full fixed top-0 h-[6vh] bg-blue-400'>
        <div className='w-[95%] mx-auto flex h-[6vh] items-center justify-start'>
        <p className='mr-10'>Pocetna</p>

        <DropdownButton id="dropdown-basic-button" title="Izaberi Jezik">
          <Dropdown.Item>Java</Dropdown.Item>
          <Dropdown.Item>C++</Dropdown.Item>
          <Dropdown.Item>Python</Dropdown.Item>
          <Dropdown.Item>JavaScript</Dropdown.Item>
       </DropdownButton>
    </div>
    </nav>
  )
}

export default Navigation