import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full bg-white p-10 overflow-y-scroll'>

    <p className='text-3xl py-5 px-0'>If uslovi</p>
          <div className='w-full flex justify-between place-items-center pt-5 text-white'>
          <Link href="/operatori" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
                        hover:bg-[#54cf92]'>Nazad</Link>
          <Link href="/" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
          hover:bg-[#54cf92]'>Naprijed</Link>
          </div>
    
          <div id='container'>
            <h1>Javascript ima nekoliko osnovnih if uslova:</h1>
            <ul className='py-5'>
                <li>if</li>
                <li>else</li>
                <li>else if</li>
            </ul>

            </div>


            <p className='py-10'><span>If</span> uslov je dio ili blok koda u Javascriptu, u kojem će se izvršiti određena radnja, ako uslov vraća <span>true</span> vrijednost.</p>

            <div id="exampleContainer">
                <h1>Primjer</h1>

                <div id="example">
                    <p>if ( sati &lt; <span>18</span>) &#123;
                    <br />
                    <span className='text-black pl-5'>pozdrav = <span>"Dobar dan";</span></span>
                    </p>
                    &#125;
                </div>

                <div id="example">
                    <p>Rezultat ce biti: <br />
                    Dobar dan</p>
                </div>

                <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                hover:bg-[#54cf92]'>Probaj u Editoru</a>
            </div>

            <div id="note">
                <p>U slučaju ako koristimo samo <span>If</span> uslov, i on ne vrati <span>true</span> vrijednost, dio koda unutar njega će se samo preskočiti</p>
            </div>

            <p className='py-10'><span>If else </span> uslov je dio ili blok koda u Javascriptu, u kojem će se izvršiti određena radnja, ako uslov vraća <span>true</span> vrijednost. <br />
            U slučaju ako ne vrati <span>true</span>, onda program ulazi u blok koda <span>else</span>.</p>

            <div id="exampleContainer">
                <h1>Primjer</h1>

                <p>Ako je vrijeme manje od 18:00 sati, onda će biti ispit "Dobar dan". <br />
                Ako će vrijeme biti veće od 18:00 sati, onda će biti ispis "Dobro većer". <br />
                Uzmimo sad za primjer da je vrijeme <span>20:00</span> sati, što znači da je vrijeme veće od 18:00 sati.</p>

                <div id="example">
                    <p>if ( sati &lt; <span>18</span>) &#123;
                    <br />
                    <span className='text-black pl-5'>pozdrav = <span>"Dobar dan";</span></span>
                    </p>
                    &#125;  else &#123; <br />
                    <span className='text-black pl-5'>pozdrav = <span>"Dobro večer";</span></span> <br />
                    &#125;
                </div>

                <div id="example">
                    <p>Rezultat ce biti: <br />
                    Dobro večer</p>
                </div>

                <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                hover:bg-[#54cf92]'>Probaj u Editoru</a>
            </div>

            <p className='py-10'><span>else if </span> uslov je dio ili blok koda u Javascriptu, u kojem će se izvršiti određena radnja, ako uslov vraća <span>true</span> vrijednost. <br />
            U slučaju ako ne vrati <span>true</span>, onda program ulazi u blok koda <span>else if</span>. <br />
            Ako i tu ne ispuni uslov, onda ulazi u blok koda <span>else</span></p>

            <div id="exampleContainer">

                <p>Ako je vrijeme manje od <span>10:00</span> sati, onda ispiši <span>Dobro jutro</span>. Ako je vrijeme manje od <span>20:00</span> sati,
                onda ispiši <span>Dobar dan</span>. U suprotnom ispiši <span>Dobro večer</span>  <br />
                Uzmimo primjer da je vrijeme <span>19:00</span> sati.</p> 
            <div id="example">
                    <p>if ( sati &lt; <span>10</span>) &#123;
                    <br />
                    <span className='text-black pl-5'>pozdrav = <span>"Dobro jutro";</span></span>
                    </p>
                    &#125;  else if ( sati &lt; <span>20</span>) &#123; <br />
                    <span className='text-black pl-5'>pozdrav = <span>"Dobar dan";</span></span> <br />
                    &#125; <br /> 
                    else &#123; <br />
                    <span className='text-black pl-5'>pozdrav = <span>"Dobro večer";</span></span> <br />
                    &#125;
                </div>

                <div id="example">
                    <p>Rezultat ce biti: <br />
                    Dobar dan</p>
                </div>

                <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                hover:bg-[#54cf92]'>Probaj u Editoru</a>
            </div>

            <div id="note">
                <h1>Savjet za if else</h1>

                <p><span>else if</span> možemo granati u scopu teoretski "koliko god želimo", ali naravno da to nije poželjno. Savjet je da se nikada ne koristi previše if else grananja, već da se koristi switch uslov.</p>
            </div>
            </div>
  )
}

export default page