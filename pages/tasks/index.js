import React from 'react'
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

function AllTasks(props) {
    const { tasks } = props;
  return (
    <div>
      {tasks.map(task => (
        <div>
            <Link href={`/tasks/${task.id}`} key={task.id}>{task.title}</Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const tasks = await res.json();
     console.log("regenerating....");
         
    return {
        props: {
            tasks
        },
        revalidate: 10,
    }
}

export default AllTasks
