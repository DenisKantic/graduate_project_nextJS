import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full bg-white p-10 overflow-y-scroll'>

<p className='text-3xl py-5 px-0'>Tipovi podataka</p>
      <div className='w-full flex justify-between place-items-center pt-5 text-white'>
      <Link href="/variables" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
                    hover:bg-[#54cf92]'>Nazad</Link>
      <Link href="/" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
      hover:bg-[#54cf92]'>Naprijed</Link>
      </div>

      <div id='container'>
        <h1>Javascript ima nekoliko vrsta tipova podataka</h1>

        <ul className='py-5'>
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Object</li>
        </ul>
        </div>


        <div id="exampleContainer" className='mt-10'>
        <h1 className='text-2xl'>Primjer</h1>

        <div id="example">
          <span id="com">// Brojevi (cijeli ili decimalni, nema veze)</span>
          <p><span id='blue'>let</span> test1 = <span>16;</span></p>
          <p className='pb-10'><span id="blue">let</span> test2 = <span>7.5;</span></p>

          <span id="com" className='py-10'>// Stringovi ( sluze za smjestanje tekstualnih podataka )</span>
          <p><span id="blue">let</span> boja = <span>"Zuta";</span></p>
          <p className='pb-10'><span id="blue">let</span> prezime = <span>"Kantic";</span></p>

          <span id="com">// Boolean (logicko ispitivanje, true ili false)</span>
          <p><span id="blue">let</span> x = <span>true;</span></p>
          <p className='pb-10'><span id="blue">let</span> y = <span>false;</span></p>

          <span id="com">// Undefined (nedeklarisana varijabla)</span>
          <p className='pb-10'><span id="blue">let</span> varijabla;</p>

          <span id="com">// Null (varijabla bez vrijednosti)</span>
          <p className='pb-10'><span id="blue">let</span> varijabla = <span>null;</span></p>

          <span id="com">// Objekat </span>
          <p><span>let</span> osoba = 
          &#123; <span id="blue">ime:</span> "Denis", <span id="blue">godine:</span>26 &#125;;</p>
        </div>

        </div>

        <p className='text-4xl py-10'>Brojevi u Javascriptu</p>

        <p className='text-xl py-5'>Svi brojevi u Javascriptu se pohranjuju kao decimalni brojevi</p>
        <p className='text-xl'>Brojevi se mogu pisati sa ili bez decimala.</p>

        <div id="exampleContainer" className='mt-10'>
          <h1>Primjer</h1>

          <div id="example">
            <span id="com">// Sa decimalama</span>
            <p className='pb-10'><span id="blue">let</span> x1 = <span>34.00</span></p>

            <span id="com">// Bez decimale</span>
            <p><span id="blue">let</span> x1 = <span>34</span></p>
          </div>
          <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
        </div>

        <p className='text-4xl py-10'>Stringovi u Javascriptu</p>

        <p className='text-xl py-5'>Stringovi u Javascriptu se mogu pisati sa jednostrukim ili dvostrukim znacima.</p>

        <div id="exampleContainer">
          <h1>Primjer</h1>

          <div id="example">
            <p><span id="com">// Korištenjem dvostrukih navodnika</span></p>
            <p className='pb-10'><span id="blue">let</span> brend = <span>"Mercedes"</span></p>

            <p><span id="com">// Bez korištenja dvostrukih navodnika</span></p>
            <p><span id="blue">let</span> brend = <span>'Mercedes'</span></p>
          </div>
          <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
        </div>

        <div id="note">
          <h1>Razlika između undefined i null u Javascriptu</h1>

          <p>U JavaScriptu, "null" je posebna vrijednost koja se koristi kada želimo eksplicitno označiti da varijabla nema vrijednost ili da je prazna. Za razliku od "undefined", koji označava da varijabla nije inicijalizirana, "null" se koristi kada želimo jasno reći da varijabla nema nikakvu vrijednost.</p>
            <br />
            <p>U JavaScriptu, "undefined" je globalna varijabla koja je automatski definirana u jeziku. Varijabla "undefined" označava vrijednost koja se dodjeljuje varijablama koje još nisu inicijalizirane ili varijablama koje su eksplicitno postavljene na tu vrijednost.</p>
       
        </div>


      </div>
  )
}

export default page