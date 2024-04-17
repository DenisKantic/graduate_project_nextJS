import React from 'react'
import Link from 'next/link'
import './style.css'

const Navbar = () => {
  return (
    <div className='w-full h-full bg-[#e7e9eb] overflow-y-scroll z-10'>
        <nav className='w-full flex flex-col justify-center items-start pt-5'>
            <p className='text-2xl py-5 font-bold'>JS Tutorijal</p>
            <p className='text-2xl py-2 bg-[#24945c] text-white font-semibold'>Početni nivo</p>

            <p className='text-lg pt-5 pb-2 font-semibold'>Osnovna sintaksa i varijable</p>
            <Link id="link" href="/variables">Deklarisanje varijabli</Link>
            <Link  id="link" href="/TipoviPodataka">Tipovi podataka</Link>
            <Link  id="link" href="/">Osnovne aritmetičke operacije</Link>
            <p className='text-lg pt-5 pb-2 font-semibold'>Control flow</p>
            <Link  id="link" href="/">If uslovi</Link>
            <Link  id="link" href="/">Operatori poređenja</Link>
            <Link  id="link" href="/">Logički operatori</Link>
            <Link  id="link" href="/">Petlje</Link>
            <p className='text-lg pt-5 pb-2 font-semibold'>Funkcije</p>
            <Link  id="link" href="/">Deklarisanje funkcija</Link>
            <Link  id="link" href="/">Parametri i argumenti</Link>
            <Link  id="link" href="/">Return</Link>

            <p className='text-2xl py-2 bg-[#24945c] text-white font-semibold'>Srednji nivo</p>
            <p className='text-lg pt-5 pb-2 font-semibold'>Nizovi</p>
            <Link  id="link" href="/">Kreiranje nizova</Link>
            <Link  id="link" href="/">Metode u nizovima</Link>
            <Link  id="link" href="/">Iteracije kroz nizove</Link>

            <p className='text-lg pt-5 pb-2 font-semibold'>Objekti</p>
            <Link  id="link" href="/">Kreiranje objekata</Link>
            <Link  id="link" href="/">Pristup objektu</Link>
            <Link  id="link" href="/">Metode u objektima</Link>


            <p className='text-lg pt-5 pb-2 font-semibold'>DOM manipulacija</p>
            <Link  id="link" href="/">Pristup HTML elementima</Link>
            <Link  id="link" href="/">Manipulisanje eventima</Link>


            <p className='text-2xl py-2 bg-[#24945c] text-white font-semibold'>Teži nivo</p>
            <p className='text-lg pt-5 pb-2 font-semibold'>Napredne funkcije</p>
            <Link  id="link" href="/">Scope funkcija</Link>
            <Link id="link"  href="/">Arrow functions</Link>

            <p className='text-lg pt-5 pb-2 font-semibold'>Asinhroni Javascript</p>
            <Link  id="link" href="/">setTimeout i setInterval</Link>
            <Link  id="link" href="/">Promises</Link>
            <Link  id="link" href="/">Async/Await</Link>



        </nav>
    </div>
  )
}

export default Navbar