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
    // const post = await getPostDataFromAPI();
    const [post, users ] = await Promise.all([getPostDataFromAPI(), getUsersDataFromAPI() ])
  return (
    <div>
        <Link href='posts/user' className=' rounded-full bg-blue-600 p-4 text-black'>Users Data only</Link>
        <h1 className='p-4 my-4 bg-red-600 text-center text-2xl'> user data</h1>
        <ul className='gap-4 flex-col'>
            {
                users.map(user=> {
                    return(
                        <li className='bg-grey-600 p-5 cursor-pointer t' key={user.id}>
                            <h1>Id:- {user.id}</h1>
                            <h2>Name:-{user.name}</h2>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.address.street}</p>
                            <p>{user.address.geo.lat}</p>
                        </li>
                    )
                })
            }
        </ul>
        <h1 className='p-4 my-4 bg-red-600 text-center text-2xl'> Post Name </h1>
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