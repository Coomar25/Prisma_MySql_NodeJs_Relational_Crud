import React from 'react'
import Link from 'next/link'

const DynamicPage = ({params}) => {
  return (
    <div className='p-100'>
        <h1 className='text-center text-4xl mt-4'>This is dynamic pagewith id = {params.id} </h1>
        <Link href='/' className='text-blue'>Home</Link>
    </div>
  )
}

export default DynamicPage