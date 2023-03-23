import React, { useState } from 'react'

export const TodoForm = (props) => {
  const [input, setInput] = useState('') 

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id : Math.floor(Math.random() * 100),
      text: input
    })

    setInput('')
  }

  return (
    <div>
        <form  className="todo-form" onSubmit={handleSubmit}>
          <input type="text" placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={ (e) => setInput(e.target.value)} />
          <button className='todo-button'>Add a todo</button>
        </form>
    </div>
  )
}
