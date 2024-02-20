import Image from 'next/image'

export default function Home() {
  return (
   <div className='h-screen bg-red-400 flex justify-center items-center'>
    <div className='grid grid-cols-2 w-[80%] auto-rows-max gap-10 text-[60px]'>
        <div className='h-[300px] flex justify-center items-center bg-blue-500'>
          <p>Java</p>
        </div>

        <div className='flex justify-center items-center bg-blue-500'>
          <p>C++</p>
        </div>

        <div className='h-[300px]  flex justify-center items-center bg-blue-500'>
          <p>Python</p>
        </div>

        <div className='flex justify-center items-center bg-blue-500'>
          <p>JavaScript</p>
        </div>

    </div>
   </div>
  )
}
