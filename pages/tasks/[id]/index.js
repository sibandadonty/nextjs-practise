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

export default TaskDetails
