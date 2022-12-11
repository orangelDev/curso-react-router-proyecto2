import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { TodoForm } from '../../ui/TodoForm';

const NewTodoPage = () => {

	const { stateUpdaters } = useTodos()
	const { addTodo } = stateUpdaters

    return (
       <TodoForm 
       label = 'Crea tu nuevo TODO'
       submitText = 'Añadir'
       submitEvent = {(text) => addTodo(text) }
       /> 
    );
}

export { NewTodoPage };