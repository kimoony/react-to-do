import React from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';
import styled from 'styled-components';

// styled-components
const ToDoForm = styled.form`
  margin-bottom: 20px;
  width: 70vw;
  
  @media screen and (min-width: 768px) {
    width: 450px;
    transition:  0.5s ease-in
  }
  @media screen and (max-width: 768px) {
    transition:  0.5s ease-in
  }
`;

const Input = styled.input`
  width: 63vw;
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid;
  border-color: ${props => props.theme.accentColor};
  border-radius: 10px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    width: 415px;
    transition:  0.5s ease-in
  }
  @media screen and (max-width: 768px) {
    transition:  0.5s ease-in
  }
`;

const AddBtn = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #2986f5;
  color: ${props => props.theme.textColor};
  font-weight: bold;
  font-size: 16px;
`;

const ErrText = styled.span`
  color: #ff7aa8;
  font-weight: bold;
  margin-left: 10px;
`;

// interface
interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos
    ])
    setValue("toDo", "")
  }
  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <Input {...register("toDo", {
        required: "To Do를 작정해주세요.",
        maxLength: 30,
      })} type="text" placeholder="To Do를 작정해주세요.(최대 30글자)" />
      <AddBtn>+</AddBtn>
      {errors.toDo && errors.toDo.type === "maxLength" && <ErrText>최대 30글자 초과</ErrText>}
    </ToDoForm>
  )
}

export default CreateToDo