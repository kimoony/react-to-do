import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

function ToDoList_exam2() {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log('add to do', data.toDo)
    setValue("toDo", "")
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo", {
          required: "To Do를 작정해주세요.",
        })} type="text" placeholder="To Do를 작정해주세요." />

        <button>Add</button>
      </form>
    </div >
  )
}

export default ToDoList_exam2