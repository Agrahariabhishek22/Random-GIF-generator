import { useState } from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <>
    <div className='bg-gray-700 min-h-screen flex flex-col '>
      <h1 className='text-center rounded-md bg-white
      font-bold mt-[35px] py-4 mx-9 text-3xl h-full'>Random GIFS</h1>
      <div className='flex flex-col items-center justify-center w-full mx-auto'>
        <Random/>
        <Tag/>
      </div>
    </div>
    </>
  )
}

export default App
