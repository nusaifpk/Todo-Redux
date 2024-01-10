import React from 'react';
import { useSelector } from 'react-redux';

const TotalItems = () => {

	const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.completed === true))
	
	return <h5 className='sub__text'>Selected Items: {completedTodos.length}</h5>;
};

export default TotalItems;
