import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-white p-10 overflow-y-scroll'>
      
      <p className='text-3xl py-5 px-0'>Deklarisanje varijabli</p>
      <div className='w-full flex justify-between place-items-center pt-5 text-white'>
      <Link href="/" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
                    hover:bg-[#54cf92]'>Nazad</Link>
      <Link href="/TipoviPodataka" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
      hover:bg-[#54cf92]'>Naprijed</Link>
      </div>

    <div id='container'>
        <h1>Varijable su "mjesto" ili tkz. "kontejneri" za smještanje podataka</h1>

        <p className='py-4'>Javascript varijable se mogu deklarisati na 4 načina:</p>
        <ul>
          <li>Automatski</li>
          <li>Korištenjem <span>var</span></li>
          <li>Korištenjem <span>let</span></li>
          <li>Korištenjem <span>const</span></li>
          </ul>     
    </div>

    <div className='p-10'> 
    <p>U ovom primjeru, <span>x</span>, <span>y</span> i <span>z</span> su nedeklarisane varijable</p>

    <p className='pt-2'>One će biti automatski deklarisane kada budu prvi put u upotrebi</p>  
    </div> 

    <div id='exampleContainer'>
      <h1 className='text-2xl'>Primjer</h1>

      <div id='example' className='flex flex-col'>
          <p>x = <span>5;</span></p>
          <p>y = <span>6;</span></p>
          <p>z = x + y;</p>
      </div>
      <a href="/" className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>

    </div>

    <div id='note'>
      <h1>Savjet</h1>

      <p>Uvijek je dobra praksa u programiranju, da se varijable deklarišu prije njihovog korištenja, kako bi se izbjegle
        potencijalne nepredviđene greške.
      </p>
    </div>


    <div id='exampleContainer'>
      <h1 className='text-2xl'>Primjer korištenja varijable var</h1>

      <div id='example' className='flex flex-col'>
          <p><span className='text-blue-800'>var</span> x = <span>5;</span></p>
          <p><span className='text-blue-800'>var</span> y = <span>6;</span></p>
          <p><span className='text-blue-800'>var</span> z = x + y;</p>
      </div>
      <a href="/" className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
    </div>

    
    <div id='note'>
      <h1>Savjet</h1>

      <p>Varijabla <span>var</span> se koristila u Javascript kodu od 1995 do 2015 godine.</p>
      <p>Varijabla <span>let</span> i <span>const</span> je dodana u Javascript 2015 godine.</p>
      <p>Varijabla <span>var</span> se treba koristiti u kodu samo za starije internet pretraživače</p>

    </div>

    <div id='exampleContainer'>
      <h1 className='text-2xl'>Primjer korištenja varijable <span>let</span></h1>

      <div id='example' className='flex flex-col'>
          <p><span className='text-blue-800'>let</span> x = <span>5;</span></p>
          <p><span className='text-blue-800'>let</span> y = <span>6;</span></p>
          <p><span className='text-blue-800'>let</span> z = x + y;</p>
      </div>
      <a href="/" className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
    </div>

    <div id='exampleContainer' className='mt-10'>
      <h1 className='text-2xl'>Primjer korištenja varijable <span>const</span></h1>

      <div id='example' className='flex flex-col'>
          <p><span className='text-blue-800'>const</span> x = <span>5;</span></p>
          <p><span className='text-blue-800'>const</span> y = <span>6;</span></p>
          <p><span className='text-blue-800'>const</span> z = x + y;</p>
      </div>
      <a href="/" className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
    </div>

    <div id='exampleContainer' className='mt-10'>
      <h1 className='text-2xl'>Kombinacija <span>const</span> i <span>let</span></h1>

      <div id='example' className='flex flex-col'>
          <p><span className='text-blue-800'>const</span> x = <span>5;</span></p>
          <p><span className='text-blue-800'>const</span> y = <span>6;</span></p>
          <p><span className='text-blue-800'>let</span> z = x + y;</p>
      </div>
      <a href="/" className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
    </div>


      <div id='note'>
        <h1>Kada koristiti var,let ili const?</h1>

        <p>Kao prvo, uvijek treba deklarisati varijable</p>
        <p>Uvijek koristiti <span>const</span> ako želimo da nam vrijednosti budu nepromjenjive</p>
        <p>Uvijek koristiti <span>let</span> ako ne želimo koristiti ili nema potrebe za <span>const</span></p>
        <p>Koristiti <span>var</span> samo ako vam aplikacija mora raditi i na starijim pretraživačima</p>
      </div>


    </div>

  )
}

export default page