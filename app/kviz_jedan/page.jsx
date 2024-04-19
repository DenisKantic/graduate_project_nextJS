"use client"
import React,{useState} from 'react'
import Link from 'next/link'

const page = () => {

    const [counter,setCounter] = useState(0);
    const [msg, setMsg] = useState("");
    console.log(counter);

    const checkResults = (counter) =>{
        if(counter < 3){
            setMsg("Vaš rezultat je loš, treba još vježbe.")
        } else {
            setMsg("Vaš rezultat je dobar, svaka čast.")
        }
    }

  return (
    <div className='w-full bg-white p-10 overflow-y-scroll'>

    <p className='text-3xl py-5 px-0'>Mini Kviz</p>
          <div className='w-full flex justify-between place-items-center pt-5 text-white'>
          <Link href="/operatori" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
                        hover:bg-[#54cf92]'>Nazad</Link>
          <Link href="/ifUslovi" className='w-[8em] py-2 text-center rounded-md bg-[#2bad6d]
          hover:bg-[#54cf92]'>Naprijed</Link>
          </div>


          <div className='p-5 w-[90%] mx-auto bg-gray-200 mt-20 h-auto'>
                <p className='text-center text-2xl py-5 font-semibold'>Mini Kviz 1</p>
                <div id='exampleContainer'>
                <p>1. Da li je upotreba <span>const</span> varijable u ovom slučaju ispravna?</p>

                    <div id='example' className='flex flex-col'>
                         <p><span className='text-blue-800'>const</span> x = <span>5;</span></p>
                        <p><span className='text-blue-800'>x</span> = <span>6;</span></p>
                     </div>
                    
                    <label className='flex items-center'>
                    <input type="radio" name='option' />
                    <p className='pl-3'>Da</p> <br />
                    </label>
                    <label className='flex items-center'>
                    <input type="radio" name='option' onClick={()=>setCounter(counter + 1)} />
                    <p className='pl-3'>Ne</p> <br />
                    </label>
                </div>


                <div id='exampleContainer' className='mt-10'>
                <p>2. Varijabla <span id="blue">let</span> nije undefined</p>

                    <div id='example' className='flex flex-col'>
                         <p><span className='text-blue-800'>let</span> varijabla<span>;</span></p>
                     </div>
                    
                    <label className='flex items-center'>
                    <input type="radio" name='option1' />
                    <p className='pl-3'>Tačno</p> <br />
                    </label>
                    <label className='flex items-center'>
                    <input type="radio" name='option1' onClick={()=>setCounter(counter + 1)} />
                    <p className='pl-3' >Netačno</p> <br />
                    </label>
                </div>


                <div id="exampleContainer" className='mt-10'>
                <p>3.  Da li će ukupna suma biti <span id="blue">8?</span></p>
                <div id="example">
                    <p><span id="blue">let</span> x = <span>5</span></p>
                    <p><span id="blue">let</span> y = <span>2</span></p>
                    <span id="blue">y++;</span>
                    <p><span id="blue">let z = x + y;</span></p>
                </div>

                <label className='flex items-center'>
                    <input type="radio" name='option2' onClick={()=>setCounter(counter + 1)} />
                    <p className='pl-3'>Da</p> <br />
                    </label>
                    <label className='flex items-center'>
                    <input type="radio" name='option2' />
                    <p className='pl-3'>Ne</p> <br />
                    </label>
            </div>


            <div id="exampleContainer" className='mt-10'>
                <p>4.  Da li je sljedeća tvrdnja tačna?</p>
                <p className='text-xl py-2 font-semibold'>U JavaScriptu, "null" je posebna vrijednost koja se koristi kada želimo eksplicitno označiti da varijabla nema vrijednost ili da je prazna. </p>

                <label className='flex items-center'>
                    <input type="radio" name='option3' onClick={()=>setCounter(counter + 1)} />
                    <p className='pl-3'>Tačno</p> <br />
                    </label>
                    <label className='flex items-center'>
                    <input type="radio" name='option3' />
                    <p className='pl-3'>Netačno</p> <br />
                    </label>
            </div>

            <div id="exampleContainer" className='mt-10'>
                <p>5.  Varijabla  <span id="blue">x</span> je tip podatka <span>String</span></p>
                <div id="example">
                    <p><span id="blue">let</span> x = <span>true;</span></p>
                </div>

                <label className='flex items-center'>
                    <input type="radio" name='option4' />
                    <p className='pl-3'>Da</p> <br />
                    </label>
                    <label className='flex items-center'>
                    <input type="radio" name='option4' onClick={()=>setCounter(counter + 1)} />
                    <p className='pl-3'>Ne</p> <br />
                    </label>
            </div>

            <button onClick={()=>checkResults(counter)} className='w-[10em] py-2 text-center rounded-md bg-[#2bad6d] mt-5 text-white
          hover:bg-[#54cf92]'>Provjeri rezultat</button>

            <p className='font-semibold py-2'>{msg}</p>
          </div>

          </div>
  )
}

export default page