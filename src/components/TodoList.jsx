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
        setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>Welcome to To-Do-List App!</h1>
        <TodoForm onSubmit={addTodos}/>
        <Todo todos={todos} completeTodo={completeTodo}/>
    </div>
  )
}