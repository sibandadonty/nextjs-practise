import React from 'react'

function UserDetails({ post }) {
  return (
    <div>
      <p>UserId: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Description: {post.description}</p>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  
   const results = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
   const data = await results.json();
   return {
    props: {
      post: data
    }
   }
}
 
export const getStaticPaths = async () => {
  const results = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await results.json();

  const paths = data.map(post => ({params: {id: post.id.toString()}}));
  
  return {
    paths: paths,
    fallback: false
  }
}

export default UserDetails
