import React from 'react'

function AllTasks(props) {
    const { tasks } = props;
  return (
    <div>
      {tasks.map(task => <p key={task.id}>{task.title}</p>)}
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const tasks = await res.json();

    return {
        props: {
            tasks
        }
    }
    
}

export default AllTasks
