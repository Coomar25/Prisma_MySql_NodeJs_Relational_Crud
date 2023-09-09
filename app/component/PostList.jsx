import React from 'react'
import Post from '../component/Post'

const PostList = ({posts}) => {
  return (
    <ul>
        <h1>Post List</h1>
        {
            posts.map(post => [
                <Post key={post.id} post={post} />
            ])
        }
    </ul>
  )
}

export default PostList