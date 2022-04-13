import React from 'react'
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms'

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



  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          DOING
        </button>)}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          TO DO
        </button>)}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>)}

    </li>
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