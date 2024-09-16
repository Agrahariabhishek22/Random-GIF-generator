import React from 'react'
import   './Spinner.css'
const Spinner = () => {
  return (
    <div className='flex flex-col item-center justify-center'>
      <div className='spinner mx-auto'></div>
      <p>loading...</p>
    </div>
  )
}

export default Spinner
