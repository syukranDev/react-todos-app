import React, { useState } from 'react'
import { TodoForm } from './TodoForm'

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodos = todo => {
        if (!todo.text) { alert('Submit Error: Please write in something!'); return ;}
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(newTodos)
    }


  return (
    <div>
        <h1>Welcome to To-Do-List App!</h1>
        <TodoForm onSubmit={addTodos}/>
    </div>
  )
}