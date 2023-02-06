import React from 'react'

export const PostTodoItem = ({handleModal}) => {
  return (
    <div className='content-header' data-cy="component-untuk-post-new-todo">
      <div id='inputTodo'>
        <input type="button"  onClick={handleModal} />
        <input type="button"  onClick={handleModal}/>
        <input type="button"  onClick={handleModal}/>
      </div>
      <button onClick={handleModal}>+</button>
    </div>
  )
}
