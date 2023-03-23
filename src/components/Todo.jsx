import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'

export const Todo = ({todos, completeTodo, removeTodo}) => {
  const [edit, setEdit] = useState({
    id : null,
    text: ''
  })    
    
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo row-complete' : 'todo-row'} key={index}>

        <div key={todo.id} onClick={ () => completeTodo(todo.id)}> {todo.text} </div>
        
        <div className="icons">
            <BiEdit 
                onClick={ () => setEdit({ id: todo.id, value: todo.text}) } 
                className='edit-icon'
            />
            <FiDelete 
                onClick={ () =>  {
                    removeTodo(todo.id)
                    console.log('Remove button is clicked!') 
                    }
                } 
                className='delete-icon'
            />
        </div>

    </div>
  ))
}
