import React, { useState } from 'react'

function ToDoList() {
  const [todo, setTodo] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(todo)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write a to do!" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList