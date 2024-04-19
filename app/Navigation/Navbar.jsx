import React from 'react'
import Link from 'next/link'
import './style.css'

const Navbar = () => {
  return (
    <div className='w-full h-full bg-[#e7e9eb] overflow-y-scroll z-10'>
        <nav className='w-full flex flex-col justify-center items-start pt-5'>
            <p className='text-2xl py-5 font-bold pl-5'>JS Tutorijal</p>
            <p className='text-2xl py-2 bg-[#24945c] text-white font-semibold w-full pl-5'>Početni nivo</p>

            <p className='text-lg pt-5 pb-2 pl-5 font-semibold'>Osnovna sintaksa i varijable</p>
            <Link id="link" href="/variables">Deklarisanje varijabli</Link>
            <Link  id="link" href="/TipoviPodataka">Tipovi podataka</Link>
            <Link  id="link" href="/operatori">Osnovne aritmetičke operacije</Link>
            <Link  id="link" className='font-bold' href="/kviz_jedan">Mini kviz</Link>

            <p className='text-lg pt-5 pb-2 pl-5 font-semibold'>Control flow</p>
            <Link  id="link" href="/ifUslovi">If uslovi</Link>
            <Link  id="link" href="/">Operatori poređenja</Link>
            <Link  id="link" href="/">Logički operatori</Link>
            <Link  id="link" href="/">Petlje</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>

            <p className='text-lg pt-5 pb-2  pl-5 font-semibold'>Funkcije</p>
            <Link  id="link" href="/">Deklarisanje funkcija</Link>
            <Link  id="link" href="/">Parametri i argumenti</Link>
            <Link  id="link" href="/">Return</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>


            <p className='text-2xl py-2 bg-[#24945c] text-white font-semibold w-full pl-5'>Srednji nivo</p>
            <p className='text-lg pt-5 pb-2 font-semibold pl-5'>Nizovi</p>
            <Link  id="link" href="/">Kreiranje nizova</Link>
            <Link  id="link" href="/">Metode u nizovima</Link>
            <Link  id="link" href="/">Iteracije kroz nizove</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>


            <p className='text-lg pt-5 pb-2 font-semibold pl-5'>Objekti</p>
            <Link  id="link" href="/">Kreiranje objekata</Link>
            <Link  id="link" href="/">Pristup objektu</Link>
            <Link  id="link" href="/">Metode u objektima</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>



            <p className='text-lg pt-5 pb-2 font-semibold pl-5'>DOM manipulacija</p>
            <Link  id="link" href="/">Pristup HTML elementima</Link>
            <Link  id="link" href="/">Manipulisanje eventima</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>



            <p className='text-2xl py-2 bg-[#24945c] text-white font-semibold w-full pl-5'>Teži nivo</p>
            <p className='text-lg pt-5 pb-2 font-semibold pl-5'>Napredne funkcije</p>
            <Link  id="link" href="/">Scope funkcija</Link>
            <Link id="link"  href="/">Arrow functions</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>


            <p className='text-lg pt-5 pb-2 font-semibold pl-5'>Asinhroni Javascript</p>
            <Link  id="link" href="/">setTimeout i setInterval</Link>
            <Link  id="link" href="/">Promises</Link>
            <Link  id="link" href="/">Async/Await</Link>
            <Link  id="link" className='font-bold' href="/operatori">Mini kviz</Link>




        </nav>
    </div>
  )
}

export default Navbar