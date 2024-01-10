    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { addTodo } from './Redux/todoSlice';


    const AddTodoForm = () => {
        const [value, setValue] = useState('');

        const dispatch = useDispatch();
        const onSubmit = (e) => {
            e.preventDefault();
            
            if (!value.trim()) {							 // If user did not typed anything before submit,then it shows an alert messege
                alert('Please type your todo......'); 
                return;
            }
        
            dispatch(
                addTodo({
                    title: value
                }),
                setValue('')   
            )
            
        };

        return (
            <div className='form__section'>
                <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    className='input'
                    placeholder='Type your todo here...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></input>

                <button type='submit' className='btn__submit'>ADD</button>
            </form>
            </div>
        );
    };

    export default AddTodoForm;
