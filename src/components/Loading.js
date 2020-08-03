import React from 'react'
import { FiLoader } from 'react-icons/fi'
export default function Loading() {
  return (
    <div className='loading'>
      <h4>rooms data loading...</h4>
      <FiLoader style={{ height: '50px', width: '50px' }} />
    </div>
  )
}
