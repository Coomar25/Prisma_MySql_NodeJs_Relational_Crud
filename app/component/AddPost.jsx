'use client'
import { useState } from "react"
import AddPostModel from "./AddPostModel"
import axios from "axios"
import { useRouter } from "next/navigation"


const AddPost = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const router = useRouter();
  // Form state
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({title, description})
    // ava send garne axios use garera 
    try{
      const response = await axios.post('/api/post', {
        title,
        description,
      });
      // console.log(response.data);
    }catch(error){
      console.error('Error creating post', error);
    }
    setTitle('');
    setDescription('');
    setModelOpen(false);
    router.refresh();
  }



  return (
    <div>
        <button onClick={()=>setModelOpen(true)} className="bg-blue-600 text-white p-3 cursor-pointer rounded-sm">Add Post</button>

        <AddPostModel modelOpen={modelOpen} setmodelOpen={setModelOpen} >
              <form action="" onSubmit={handleSubmit}>
                <h1 className="text-2xl pb-3">Add New Post</h1>
                <input type="text" placeholder="Title"  value={title} onChange={(e) => setTitle(e.target.value)} name="title" className="w-full p-2" />
                <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} name="description" className="w-full p-2 my-5" />
                <button type="submit" className="bg-blue-700 text-white px-5 py-5">Submit</button>
              </form>

        </AddPostModel>
    </div>
  )
}

export default AddPost