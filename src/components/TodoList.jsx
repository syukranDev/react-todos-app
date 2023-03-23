import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodos = todo => {
        if (!todo.text) { alert('Submit Error: Please write in something!'); return ;}
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        console.log('U clicked on the todo')
        setTodos(updatedTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        console.log(removeArr)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text) return; 
        console.log('inside updateTodo()')
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

  return (
    <div>
        <h1 className='title-header'>Welcome to To-Do-List App!</h1>
        <TodoForm onSubmit={addTodos}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}