import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './PutModalItem.css'

const PutModalItem = ({title,handlechangeTitle,defaultValue,value,handlechangePriority,saveChange,...props}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-cy="component-modal-untuk-update-todo"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='fs-5 fw-normal'>
            Tambah List Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4 className='fs-6 text-uppercase'>Nama List Item</h4>
        <input type="text" placeholder='Tambahkan nama activity' defaultValue={title} onChange={handlechangeTitle}/>
        <h4 className='fs-6 text-uppercase mt-5 mb-3'>Priority</h4>
        <select name="priority" id="priority" className='text-start' defaultValue={defaultValue} onChange={handlechangePriority}>
          <option value="very-high">Very High</option>
          <option value="high">High</option>
          <option value="normal">Medium</option>
          <option value="low">Low</option>
          <option value="very-low">Very Low</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveChange}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PutModalItem