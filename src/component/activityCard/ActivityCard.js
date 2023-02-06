import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDeleteTodosMutation } from '../../config/slice/APISlice';

const ActivityCard = ({id, title,created}) => {

  let dateCreated = new Date(created).toLocaleDateString("id-ID", {
    dateStyle: "long",
  });
  const navigate = useNavigate()
  const [deleteTodo] = useDeleteTodosMutation()

  const handleDelete = () =>{
    deleteTodo({id:id})
  }
  
  return (
    <div className='cards' data-cy="component-card">
        <h1 onClick={() => navigate(`/${id}`)}>{title}</h1>
        <div className="footer-card">
          <p>{dateCreated}</p>
          <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    </div>
  )
}

export default ActivityCard