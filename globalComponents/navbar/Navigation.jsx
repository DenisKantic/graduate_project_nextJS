"use client"
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';


const Navigation = () => {
  return (
    <nav className='w-full fixed top-0 h-[6vh] bg-blue-400'>
        <div className='w-[95%] mx-auto flex h-[6vh] items-center justify-start'>
        <Link className='mr-10' href='/'>Pocetna</Link>

        <DropdownButton id="dropdown-basic-button" title="Izaberi Jezik">
          <Dropdown.Item><Link href="/java">Java</Link></Dropdown.Item>
          <Dropdown.Item><Link href="/c++">C++</Link></Dropdown.Item>
          <Dropdown.Item><Link href="/python">Python</Link></Dropdown.Item>
          <Dropdown.Item><Link href='/javascript'>JavaScript</Link></Dropdown.Item>
       </DropdownButton>
    </div>
    </nav>
  )
}

export default Navigation