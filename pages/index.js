import React from 'react';

function HomePage(props) {
  console.log("Data: ", props.data);
  
  return (
    <div className='w-full min-h-screen'>
      <div className='max-w-500 h-full flex justify-center flex-col'>
        {props.data.map(item => (
          <div className='shadow-md p-4 w-100' key={item.id}>
            <p>Name: {item.name}</p>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
   const result = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await result.json();

  return {
    props: {
      data
    }
  }
};

export default HomePage;
