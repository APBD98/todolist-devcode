//activity for postAdded

import React from 'react'
import { useAddTodosMutation } from '../../config/slice/APISlice';

const ActivityForm = () => {
  const [addTodo] = useAddTodosMutation()

  const addActivity = () =>{
    addTodo({
      email:'azraiputrabarumundaulay@gmail.com',
      title: 'New Activity'
    })

  }

  

  return (
    <div className='activity-form' >
      <p className="activity-title" data-cy="header-title">Activity</p>
      <button className='activity-add-button' onClick={addActivity} data-cy="activity-add-button"><span>+</span> Tambah</button>
    </div>
  )
}

export default ActivityForm