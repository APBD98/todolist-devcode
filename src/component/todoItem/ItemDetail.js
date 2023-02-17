import React, {useEffect, useState} from 'react'
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useDeleteTodoItemMutation } from '../../config/slice/APISlice';
import PutModalItem from './PutModalItem';
import moment from 'moment/moment';


const TodoItem = (props) => {

  const [singleItem, setSingleItem] = useState({})
  const [modalShow, setModalShow] = useState(false);
  const [newTitle, setNewTitle] = useState('')
  const [newPriority, setNewPriority] = useState('very-high')
  const [isChecked, setIsChecked] = useState(false)

  const [deleteItem] = useDeleteTodoItemMutation()

  
  const deleteItemTodo = () =>{
    deleteItem({id:props.id})
  }

  const handleTitle = (e) => {
    setNewTitle(e.target.value)
  }

  const handlePriority = (e) =>{
    setNewPriority(e.target.value)
  }

  useEffect(() => {
    axios.get(`https://todo.api.devcode.gethired.id/todo-items/${props.id}`)
    .then((res) => {setSingleItem(res.data)})
  },[singleItem])

  const handleEditTodoItem = () => {
    setModalShow(true)
  }

  const handleConfirm = () => {
    axios.put(`https://todo.api.devcode.gethired.id/todo-items/${props.id}`,{
      title:newTitle,
      activity_group_id:props.groupId,
      is_active:false,
      priority: newPriority,
      created_at: moment(),
      updated_at: moment()

    })
    .then((response) => console.log(response))
    setModalShow(false)
  }

  
  const bgBullet = () => {
    const newSingleItem = {...singleItem}
    const bgPriority = newSingleItem.priority
    if (bgPriority === "high") {
      return " #F8A541";
    } else if (bgPriority === "normal") {
      return " #00A790";
    } else if (bgPriority === "low") {
      return " #428BC1";
    } else if (bgPriority === "very-low") {
      return " #8942C1";
    } else {
      return " #ED4C5C";
    }
  };

  const styles = {
    rounded:{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: bgBullet()
    }
  }

  const handleChecked = () =>{
    if(isChecked === false){
      setIsChecked(true)
    }else{
      setIsChecked(false)
    }
    console.log(isChecked)
  }
  
  return (
    
    <div className='item-detail' data-cy="todo-item" > 
      <input type="checkbox" className=' ms-5' style={{"width":"25px", "height":"25px"}} onChange={handleChecked} data-cy="todo-item-checkbox"/>
      <span className='priority-rounded' style={styles.rounded} data-cy="todo-item-priority-indicator"></span>
      <div className='d-flex mt-3' style={{"width":"80%"}}>
        <h1 className='fs-5 ' style={{textDecoration:isChecked?"line-through":"none", opacity:isChecked?"0.5" : "1"}} data-cy="todo-title">{props.title}</h1>          
        <p className='ms-3' onClick={handleEditTodoItem} data-cy="todo-title-edit-button"><FontAwesomeIcon icon={faPen} /></p>           
      </div>
      <p className='me-2 mt-3' onClick={deleteItemTodo} data-cy="todo-item-delete-button"><FontAwesomeIcon icon={faTrash} /></p>

      <div className="modal">
      {<PutModalItem
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={singleItem.title}
        defaultValue={singleItem.priority}
        handlechangeTitle={handleTitle}
        handlechangePriority={handlePriority}
        saveChange={handleConfirm}
      />}
      </div>
    </div>
  )
}

export default TodoItem