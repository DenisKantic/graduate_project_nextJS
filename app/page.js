import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className='h-screen bg-red-400 flex justify-center items-center'>
    <div className='grid w-[80%] auto-rows-max gap-10 text-[60px]
                    sm:grid-cols-1 md:grid-cols-2'>
        <Link 
        className='h-[300px] flex justify-center items-center bg-blue-500 cursor-pointer rounded-xl'
        href="/java">
          <p>Java</p>
        </Link>

        <Link 
        className='flex justify-center items-center bg-blue-500 rounded-xl'
        href="c++">
          <p>C++</p>
        </Link>

        <Link 
        className='h-[300px]  flex justify-center items-center bg-blue-500 rounded-xl'
        href="/python">
          <p>Python</p>
        </Link>

        <Link 
        className='flex justify-center items-center bg-blue-500 rounded-xl'
        href="/javascript">
          <p>JavaScript</p>
        </Link>

    </div>
   </div>
  )
}
