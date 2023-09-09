import React from 'react'
import AddPost from '../component/AddPost'
import PostList from '../component/PostList'

async function getData(){
  const res =  await fetch('http://localhost:3000/api/post/');
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

const Crud = async () => {
  const postData = await getData();
  // console.log(postData);
  return (
    <div className='max-w-4xl mx-auto mt-4'>
        <div className='my-5 flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>To-do List</h1>
                <AddPost/>
        </div>

        <PostList posts= {postData}/>
    </div>
  )
}

export default Crud
