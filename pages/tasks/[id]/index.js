import { notFound } from 'next/navigation';
import React from 'react'

function TaskDetails(props) {
    const { task } = props;

  return (
    <div>
       <p>Task Name: {task.title}</p>
      <p>Task Description: {task.description}</p>
      <p>Task Status: {task.isDone? "Pending" : "Completed"}</p>
    </div>
  )
}

export async function getStaticProps(context) {
    const { params } = context;

    const res = await fetch(`http://127.0.0.1:8000/tasks/${params.id}`);

    const task = await res.json()

    return {
        props: {
            task
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const tasks = await res.json();
    

    const paths = tasks.map(task => ({params: {id: String(task.id)}}))

    return {
        paths,
        fallback: false
    }
    
}

export default TaskDetails
