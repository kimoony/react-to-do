import React from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState)
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos
    ])
    setValue("toDo", "")
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("toDo", {
        required: "To Do를 작정해주세요.",
      })} type="text" placeholder="To Do를 작정해주세요." />
      <button>Add</button>
    </form>
  )
}

export default CreateToDo