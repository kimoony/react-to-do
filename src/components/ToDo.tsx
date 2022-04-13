import React from 'react'
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms'
import styled from 'styled-components';


// styled-components
const ToDoList = styled.li`
  list-style: none;
  padding: 10px 20px;
  width: 70vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: ${props => props.theme.accentColor};
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 450px;
    transition:  0.5s ease-in
  }
  @media screen and (max-width: 768px) {
    transition:  0.5s ease-in
  }
`;

const Text = styled.span`
`;

const BtnWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.btnColor};
  color: ${props => props.theme.textColor};
  margin-left: 3px;
`;

const RmBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ff7aa8;
  color: ${props => props.theme.textColor};
  margin-left: 3px;
`;

// 방법 2
function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }
    } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
      const newToDo = { text, id, category: name as any }
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1)
      ];
    })
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos(oldToDos => {
      const removeTarget = oldToDos.filter(toDo => toDo.id !== id)
      return removeTarget;
    })
  }

  return (
    <ToDoList>
      <Text>{text}</Text>
      <BtnWrapper>
        {category !== Categories.DOING && (
          <Btn name={Categories.DOING} onClick={onClick}>
            DOING
          </Btn>)}
        {category !== Categories.TO_DO && (
          <Btn name={Categories.TO_DO} onClick={onClick}>
            TO DO
          </Btn>)}
        {category !== Categories.DONE && (
          <Btn name={Categories.DONE} onClick={onClick}>
            DONE
          </Btn>)}
        <RmBtn onClick={handleRemove}>
          X
        </RmBtn>
      </BtnWrapper>
    </ToDoList>
  )
}

export default ToDo


// // 방법 1
// function ToDo({ text, category }: IToDo) {
//   const onClick = (newCategory:IToDo["category"]) => { };

//   return (
//     <li>
//       <span>{text}</span>
//       {category !== "DOING" && (
//         <button onClick={() => onClick("DOING")}>DOING</button>)}  {/* 인자가 있는 onClick 이벤트를 처리하는 방법 */}
//       {category !== "TO_DO" && (
//         <button onClick={() => onClick("TO_DO")}>TO DO</button>)}
//       {category !== "DONE" && (
//         <button onClick={() => onClick("DONE")}>DONE</button>)}
//     </li>
//   )
// }

// export default ToDo