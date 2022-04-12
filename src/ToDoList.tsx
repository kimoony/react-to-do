import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



// function ToDoList() {
//   const [todo, setTodo] = useState("")
//   const [toDoErr, setTodoErr] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoErr("")
//     setTodo(todo)
//   }
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if(toDo.length < 10) {
//       return setTodoErr("To Do should be longer");
//     }
//     console.log("submit")
//   }
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} type="text" placeholder="Write a to do!" />
//         <button>Add</button>
//         {toDoErr !== "" ? toDoErr : null}
//       </form>
//     </div>
//   )
// }



function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data)
  }
  console.log(formState.errors)


  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register('email', { required: true })} type="text" placeholder="Email" />
        <input {...register('firstName', { required: true })} type="text" placeholder="First Name" />
        <input {...register('lastName', { required: true })} type="text" placeholder="Last Name" />
        <input {...register('username', { required: true, minLength: 10 })} type="text" placeholder="Username" />
        <input {...register('password', { required: true, minLength: 5 })} type="text" placeholder="Password" />
        <input {...register('password1', {
          required: "Password is requierd",
          minLength: {
            value: 5,
            message: "Your password is too short!"
          }
        })} type="text" placeholder="Password1" />
        <button>Add</button>
      </form>
    </div >
  )
}

export default ToDoList