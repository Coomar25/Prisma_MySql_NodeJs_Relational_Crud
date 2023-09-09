import React from 'react'

const Post = ({post}) => {
  return (

    <div>
        <li className=' p-3 bg-slate-400 my-5 cursor-pointer'>
            <h1 className='text-2xl font-bold font-mono'>{post.title}</h1>
            <p className='text-lg font-thin'>{post.description}</p>
        </li>
    </div>

  )
}

export default Post