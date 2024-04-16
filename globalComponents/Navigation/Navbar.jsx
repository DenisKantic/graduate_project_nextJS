import React from 'react'
import Link from 'next/link'
import './style.css'

const Navbar = () => {
  return (
    <div className='w-full h-full bg-[#e7e9eb] overflow-y-scroll'>
        <nav className='w-full flex flex-col justify-center items-start pt-5'>
            <p className='text-2xl py-5 font-bold'>JS Tutorijal</p>
            <p className='text-2xl py-2 bg-[#2bad6d] text-white font-semibold'>Početni nivo</p>

            <p className='text-xl pt-5 pb-2 font-semibold'>Osnovna sintaksa i varijable</p>
            <Link id='test' href="/">Deklarisanje varijabli</Link>
            <Link href="/">Tipovi podataka</Link>
            <Link href="/">Osnovne aritmetičke operacije</Link>
            <p className='text-xl pt-5 pb-2 font-semibold'>Control flow</p>
            <Link href="/">If uslovi</Link>
            <Link href="/">Operatori poređenja</Link>
            <Link href="/">Logički operatori</Link>
            <Link href="/">Petlje</Link>
            <p className='text-xl pt-5 pb-2 font-semibold'>Funkcije</p>
            <Link href="/">Deklarisanje funkcija</Link>
            <Link href="/">Parametri i argumenti</Link>
            <Link href="/">Return</Link>

            <p className='text-2xl py-2 bg-[#2bad6d] text-white font-semibold'>Srednji nivo</p>
            <p className='text-xl pt-5 pb-2 font-semibold'>Nizovi</p>
            <Link href="/">Kreiranje nizova</Link>
            <Link href="/">Metode u nizovima</Link>
            <Link href="/">Iteracije kroz nizove</Link>

            <p className='text-xl pt-5 pb-2 font-semibold'>Objekti</p>
            <Link href="/">Kreiranje objekata</Link>
            <Link href="/">Pristup objektu</Link>
            <Link href="/">Metode u objektima</Link>


            <p className='text-xl pt-5 pb-2 font-semibold'>DOM manipulacija</p>
            <Link href="/">Pristup HTML elementima</Link>
            <Link href="/">Manipulisanje eventima</Link>


            <p className='text-2xl py-2 bg-[#2bad6d] text-white font-semibold'>Teži nivo</p>
            <p className='text-xl pt-5 pb-2 font-semibold'>Napredne funkcije</p>
            <Link href="/">Scope funkcija</Link>
            <Link href="/">Arrow functions</Link>

            <p className='text-xl pt-5 pb-2 font-semibold'>Asinhroni Javascript</p>
            <Link href="/">setTimeout i setInterval</Link>
            <Link href="/">Promises</Link>
            <Link href="/">Async/Await</Link>



        </nav>
    </div>
  )
}

export default Navbar