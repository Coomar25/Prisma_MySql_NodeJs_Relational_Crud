import Link from 'next/link';
import React from 'react'

async function getPostDataFromAPI(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    await new Promise((resolve)=> setTimeout(resolve, 1000)) // 3 sec rokxa
    return res.json();
}

  const getUsersDataFromAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response.json();
}


const Post = async () => {
    const post = await getPostDataFromAPI();
    // const [post, users ] = await Promise.all([getPostDataFromAPI, getUsersDataFromAPI ])
  return (
    <div>
        <Link className=' rounded-full '>Users Data</Link>
        <h1 > Post Name </h1>
        <ul className='gap-4 flex-col'>
            {
                post.map(post=> {
                    return(
                        <li className='bg-grey-600 p-5 cursor-pointer text-center' key={post.id}>
                            <h1>{post.id}</h1>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Post