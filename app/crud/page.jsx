import React from 'react'
import AddPost from '../component/AddPost'
import PostList from '../component/PostList'
import axios from 'axios';


async function getData(){
  try {
    const response = await axios.get('http://localhost:3000/api/post', { 'Cache-Control': 'no-store' });
    const serverResponse = response.data;
    const successMessage = response.data.message;
    return serverResponse;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data. Please try again later.');
  }
}

const Crud = async () => {
  const postData = await getData();
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


















  // here res.ok is only applicable for fetch only not for the axios
  // if(!res.ok){
  //   throw new Error("Failed to fetch data")
  // }