import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { faChevronLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import moment from 'moment';
import MyVerticallyCenteredModal from './Modal';
import { PostTodoItem } from '../../component/todoItem/PostTodoItem';
import TodoItem from '../../component/todoItem/ItemDetail';
import sortImage from '../../assets/image/sort.png'



const ActivityDetail = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [actvityDetail, setActivityDetail] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [listItems, setListItems] = useState([])
  const [sorting, setSorting] = useState('none')
  const [sortDisplay, setSortDisplay] = useState(false)

  
  const [inputTitleItem, setInputTitleItem] = useState('test')
  const [selectPriority, setSelectPriority] = useState('very-high')
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    axios.get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
    .then((response) => setActivityDetail(response.data))
  },[actvityDetail])

  useEffect(() => {
    axios.get(`https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`).then((res) => setListItems(res.data.data))
  }, [listItems])
  

  const handleSubmit = (e) => {

    axios.put(`https://todo.api.devcode.gethired.id/activity-groups/${id}`,{
      title: e.target.value,
      created_at: actvityDetail.created_at,
      updated_at: moment(),
      email:'azraiputrabarumundaulay@gmail.com'
    }).then((response) => console.log(response))

    
   }

   

   const handleIsActive = () =>{
    if(isActive === false){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
   }

   const inputTitleTodo = (e) =>{
    setInputTitleItem(e.target.value)
   }

   const selectPriorityTodo = (e) =>{
    setSelectPriority(e.target.value)
   }

   const addTodoItem = () =>{
    axios.post(`https://todo.api.devcode.gethired.id/todo-items`,{
      title:inputTitleItem,
      activity_group_id:id,
      priority:selectPriority
    })
    .then((res) => console.log(res))
    setModalShow(false)
   }
   const sortingNew = () => {
    setSorting('none')
    setTimeout(() => setSortDisplay(false), 300)
   }



  return (
    <div className='activity-detail' data-cy="activity-item">
      <div className="header">
        <div className='header-left'>
          <p onClick={() => navigate('/')}><FontAwesomeIcon icon={faChevronLeft} data-cy="todo-back-button"/></p>
          {
            isActive ? <input type="text"  onChange={handleSubmit} defaultValue={actvityDetail.title} data-cy="todo-title"/> : <h1>{actvityDetail.title}</h1>
          }
          
          <p><FontAwesomeIcon icon={faPen} onClick={handleIsActive}/></p>

        </div>
        <div data-cy="sort-selection" style={{width:'50px', height:'50px', border:'1px solid grey', borderRadius:'50%', padding:'8px', position:'absolute', top:'15px', right:'180px'}}>
            <img src={sortImage} alt="sorting" style={{cursor:'pointer'}} 
            onClick={() => {
              if(sortDisplay === false){
                setSortDisplay(true)
              }else{
                setSortDisplay(false)
              }
            }}/>
            <div className='sorting' style={{display:sortDisplay?'flex':'none'}}>
              <button className='sorting-button' data-cy="sort-az" 
              onClick={() => {
                setSorting('AZ')
                setTimeout(() => setSortDisplay(false), 300)
                }}>AZ</button>
              <button className='sorting-button' data-cy="sort-za"
              onClick={() => {
                setSorting('ZA')
                setTimeout(() => setSortDisplay(false), 300)
                }}>ZA</button>
              <button data-cy="sort-latest" onClick={sortingNew}>Terbaru</button>
            </div>
        </div>
          
        <button className='activity-add-button' onClick={() => setModalShow(true)} data-cy="todo-add-button">+ Tambah</button>
        
      </div>

      <div className="content">
      {
        listItems.length <=0 &&(
          <PostTodoItem handleModal={() => setModalShow(true)}/>
        )
        
          }
          <section>
          {
              sorting ==='none' &&(
                listItems?.map((item) => (
                  <div className='item-content' key={item.id}>
                    <TodoItem title={item.title} id={item.id} groupId={id}/>       
                  </div>
                ))
              )
            }
            {
              sorting ==='AZ' &&(
                listItems.sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                )
                .map((item) => (
                  <div className='item-content' key={item.id}>
                    <TodoItem title={item.title} id={item.id} groupId={id}/>       
                  </div>
                ))
              )
            }

{
              sorting ==='ZA' &&(
                listItems.sort((a, b) =>
                  a.title > b.title ? -1 : 1,
                )
                .map((item) => (
                  <div className='item-content' key={item.id}>
                    <TodoItem title={item.title} id={item.id} groupId={id}/>       
                  </div>
                ))
              )
            }
            
          </section>

        
      </div>
      <div className="modal">
      {<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        inputTitle={inputTitleTodo}
        value={selectPriority}
        selectValue={selectPriorityTodo}
        addTodoItem={addTodoItem}
      />}
      </div>

    </div>
  )
}

export default ActivityDetail