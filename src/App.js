import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className='container'><center>
			<h2>Todo List</h2>
			<AddTodoForm />
			<TodoList />
			</center>
		</div>
	);
};

export default App;
