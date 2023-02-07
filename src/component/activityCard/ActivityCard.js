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
    <div className='cards' data-cy="activity-item">
        <h1 onClick={() => navigate(`/${id}`)} data-cy="activity-item-title">{title}</h1>
        <div className="footer-card">
          <p data-cy="activity-item-date">{dateCreated}</p>
          <button onClick={handleDelete} data-cy="activity-item-delete-button"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    </div>
  )
}

export default ActivityCard