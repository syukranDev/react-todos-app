import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import { TodoForm } from './TodoForm'

export const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id : null,
    text: ''
  })
  
  const [isClick, setClick] = useState(false)

  const handleClick = () => {
    setClick(value => !value)
    console.log(isClick)
  }

  const submitUpdate = value => {
    updateTodo(edit.id, value) 
    setEdit({
        id : null,
        value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  } 
  
    
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo row-complete' : 'todo-row'} key={index}>

        <div 
            className={isClick === false ? '' : 'pendingTodo'}
            key={todo.id} 
            onClick={ () => {completeTodo(todo.id); handleClick(todo.id)}}  
            
        > 
            {todo.text} |
        </div>
        
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
                style ={{ color: 'red'}}

            />
        </div>

    </div>
  ))
}
