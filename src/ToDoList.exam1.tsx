import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


// // 기존 방식
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


interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

function ToDoList_exam1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    }
  });
  const onValid = (data: IForm) => {
    // 직접 에러 설정
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "패스워드가 일치하지 않아요!" },
        { shouldFocus: true },
      )
    }
    // // 특정 항목에 해당되는 레어가 아니라 전체 Form에 해당되는 에러
    // setError("extraError", { message: "Server offline" })
  }
  console.log(errors)


  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register('email', {
          required: "Email을 입력하세요!",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "naver.com email만 사용가능"
          }
        })} type="text" placeholder="Email" />
        <span>
          {errors?.email?.message}
        </span>
        <input {...register('firstName', {
          required: "First Name을 입력하세요!!",
          validate: {
            noLowerHoon: (value) =>
              value.includes("hoon") ? "hoon을 사용할 수 없어요." : true,
            noUpperHoon: (value) =>
              value.includes("Hoon") ? "Hoon을 사용할 수 없어요." : true,
          }
        })} type="text" placeholder="First Name" />
        <span>
          {errors?.firstName?.message}
        </span>
        <input {...register('lastName', {
          required: "Last Name을 입력하세요!!"
        })} type="text" placeholder="Last Name" />
        <span>
          {errors?.lastName?.message}
        </span>
        <input {...register('username', {
          required: "Username을 입력하세요!!",
          minLength: {
            value: 4,
            message: "Username은 4자 이상입니다."
          }
        })} type="text" placeholder="Username" />
        <span>
          {errors?.username?.message}
        </span>
        <input {...register('password', {
          required: "Password를 입력하세요!!",
          minLength: {
            value: 8,
            message: "패스워드가 너무 짧아요! 패스워드 8자리 이상"
          }
        })} type="text" placeholder="Password" />
        <span>
          {errors?.password?.message}
        </span>
        <input {...register('passwordConfirm', {
          required: "Password를 다시 입력하세요!!",
          minLength: {
            value: 8,
            message: "패스워드가 너무 짧아요! 패스워드 8자리 이상"
          }
        })} type="text" placeholder="Password Confirm" />
        <span>
          {errors?.passwordConfirm?.message}
        </span>
        <button>Add</button>
        {/* <span>
          {errors?.extraError?.message}
        </span> */}
      </form>
    </div >
  )
}

export default ToDoList_exam1