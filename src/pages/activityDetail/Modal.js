import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"


function  MyVerticallyCenteredModal({inputTitle,value,selectValue,addTodoItem,...props}) {
  
  return (
    <>

      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-cy="modal-add"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='fs-5 fw-normal' data-cy="modal-add-title">
          Tambah List Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='fs-6 text-uppercase' data-cy="modal-add-name-title">Nama List Item</h4>
        <input type="text" placeholder='Tambahkan nama activity' onChange={inputTitle} data-cy="modal-add-name-input"/>
        <h4 className='fs-6 text-uppercase mt-5 mb-3' data-cy="modal-add-priority-title">Priority</h4>
        <select name="priority" id="priority" className='text-start' value={value} onChange={selectValue} data-cy="modal-add-priority-dropdown">
          <option value="very-high" data-cy="modal-add-priority-item">Very High</option>
          <option value="high" data-cy="modal-add-priority-item">High</option>
          <option value="normal" data-cy="modal-add-priority-item">Medium</option>
          <option value="low" data-cy="modal-add-priority-item">Low</option>
          <option value="very-low" data-cy="modal-add-priority-item">Very Low</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addTodoItem} data-cy="modal-add-save-button">Simpan</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default  MyVerticallyCenteredModal