import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full bg-white p-10 overflow-y-scroll'>

    <p className='text-3xl py-5 px-0'>Osnovne aritmetičke operacije</p>
          <div className='w-full flex justify-between place-items-center pt-5 text-white'>
          <Link href="/TipoviPodataka" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
                        hover:bg-[#54cf92]'>Nazad</Link>
          <Link href="/" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
          hover:bg-[#54cf92]'>Naprijed</Link>
          </div>
    
          <div id='container'>
            <h1>Javascript ima nekoliko osnovnih aritmetičkih operacija:</h1>
    
            <ul className='py-5'>
              <li>+ (sabiranje)</li>
              <li>- (oduzimanje)</li>
              <li>* (množenje)</li>
              <li>/ (dijeljenje)</li>
              <li>% (modulo)</li>
              <li>++ (increment)</li>
              <li>-- (decrement)</li>
            </ul>
            </div>

            <p className='text-4xl pt-10'>Sabiranje</p>

            <p className='py-5'>Operator "+" sabiranja, zbraja zbir dva broja</p>

            <div id="exampleContainer">
                <h1>Primjer</h1>
                <div id="example">
                    <p><span id="blue">let</span> x = <span>5</span></p>
                    <p><span id="blue">let</span> y = <span>2</span></p>
                    <p><span id="blue">let z = x + y; <span id="com">// rezultat ce biti 7</span></span></p>

                </div>
                <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                hover:bg-[#54cf92]'>Probaj u Editoru</a>
            </div>

            <p className='text-4xl pt-10'>Oduzimanje</p>

            <p className='py-5'>Operator "-" oduzimanja, oduzima dva broja</p>

            <div id="exampleContainer">
                <h1>Primjer</h1>
                <div id="example">
                    <p><span id="blue">let</span> x = <span>5</span></p>
                    <p><span id="blue">let</span> y = <span>2</span></p>
                    <p><span id="blue">let z = x - y; <span id="com">// rezultat ce biti 3</span></span></p>

                </div>
                <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
            </div>

            <p className='text-4xl pt-10'>Množenje</p>

            <p className='py-5'>Operator "*" množenja, množi dva broja</p>

            <div id="exampleContainer">
                <h1>Primjer</h1>
                <div id="example">
                    <p><span id="blue">let</span> x = <span>5</span></p>
                    <p><span id="blue">let</span> y = <span>2</span></p>
                    <p><span id="blue">let z = x * y; <span id="com">// rezultat ce biti 10</span></span></p>
                    </div>
                    <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
                </div>

                <p className='text-4xl pt-10'>Dijeljenje</p>

                <p className='py-5'>Operator "/" dijeljenja, dijeli dva broja</p>

                <div id="exampleContainer">
                    <h1>Primjer</h1>
                    <div id="example">
                        <p><span id="blue">let</span> x = <span>5</span></p>
                        <p><span id="blue">let</span> y = <span>2</span></p>
                        <p><span id="blue">let z = x / y; <span id="com">// rezultat ce biti 2.5</span></span></p>
                        </div>
                        <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
      hover:bg-[#54cf92]'>Probaj u Editoru</a>
                    </div>


                    <p className='text-4xl pt-10'>Modulo</p>

                    <p className='py-5'>Operator "%" modulo, vraća ostatak usljed dijeljenja dva broja</p>

                    <div id="exampleContainer">
                        <h1>Primjer</h1>
                        <div id="example">
                            <p><span id="blue">let</span> x = <span>5</span></p>
                            <p><span id="blue">let</span> y = <span>2</span></p>
                            <p><span id="blue">let z = x % y; <span id="com">// rezultat ce biti 1</span></span></p>
                            </div>
                            <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                    hover:bg-[#54cf92]'>Probaj u Editoru</a>
                        </div>

                        <p className='text-4xl pt-10'>Increment</p>

                        <p className='py-5'>Operator "++" increment, povećava broj za jedan (trenutni broj+1)</p>

                        <div id="exampleContainer">
                            <h1>Primjer</h1>
                            <div id="example">
                                <p><span id="blue">let</span> x = <span>5</span></p>
                                <p><span id="blue">let</span> x++;<span></span></p>
                                <p><span id="blue">console.log(x) <span id="com">// rezultat ce biti 6</span></span></p>
                                </div>
                                <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                        hover:bg-[#54cf92]'>Probaj u Editoru</a>
                            </div>


                            <p className='text-4xl pt-10'>Decrement</p>

                            <p className='py-5'>Operator "--" increment, smanjuje broj za jedan (trenutni broj-1)</p>

                            <div id="exampleContainer">
                                <h1>Primjer</h1>
                                <div id="example">
                                    <p><span id="blue">let</span> x = <span>5</span></p>
                                    <p><span id="blue">let</span> x--;<span></span></p>
                                    <p><span id="blue">console.log(x) <span id="com">// rezultat ce biti 4</span></span></p>
                                    </div>
                                    <a href="https://www.programiz.com/javascript/online-compiler/"  target='_blank' className='px-4 py-3  rounded-md  text-white font-semibold bg-[#2bad6d]
                            hover:bg-[#54cf92]'>Probaj u Editoru</a>
                                </div>




                    

        </div>
  )
}

export default page