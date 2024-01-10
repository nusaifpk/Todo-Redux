import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from './Redux/todoSlice';


const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    dispatch(editTodo({ id, title: editedTitle }));
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <center>
      <li className='list__view'>
      <div className='d-flex justify-content-between'>
        {isEditing ? (
          <span className='d-flex align-items-center'>
            <input  type='text'
                    className='input__edit'
                    value={editedTitle}
                    onChange={handleTitleChange}
            />
            <button className='control__icon' onClick={handleEditSubmit}><span><i class="ri-save-3-line"></i></span></button>
          </span>
        ) : (
          <span className='d-flex align-items-center'>
            {title}
          </span>
        )}
        <div>
          <button className='control__icon' onClick={handleEdit}><span><i class="ri-edit-box-line"></i></span></button>
          <button className='control__icon' onClick={handleDelete}><span><i class="ri-delete-bin-line"></i></span></button>
        </div>
      </div>
    </li>
    </center>
  );
};

export default TodoItem;
