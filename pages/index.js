import React from 'react';
import Link from 'next/link';

function HomePage(props) {
 
  return (
    <div className='w-full min-h-screen'>
      <div className='max-w-500 h-full flex justify-center flex-col'>
        {props.data.map(item => (
          <div className='shadow-md p-4 w-100' key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <p>Name: {item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
   const result = await fetch("https://jsonplaceholder.typicode.com/posts");
   
   if (!result.ok) {
     throw new Error(result.message || "Something went wrong")
   }

   const data = await result.json();

  return {
    props: {
      data
    }
  }
};



export default HomePage;
