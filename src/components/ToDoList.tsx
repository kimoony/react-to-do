import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import styled from 'styled-components';

// styled-components
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 50px 0px;
  font-size: 40px;
`;

const Selector = styled.select`
  width: 70vw;
  padding: 5px 10px;
  border-color: ${props => props.theme.accentColor};
  border-radius: 10px;
  font-weight: bold;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.accentColor};
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 450px;
    transition:  0.5s ease-in;
  }
  @media screen and (max-width: 768px) {
    transition:  0.5s ease-in;
  }
`;


function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {  // selcet의 change event 를 감지
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Wrapper>
      <Title>My To-Do List</Title>
      <Selector value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing..</option>
        <option value={Categories.DONE}>Done!</option>
      </Selector>
      <CreateToDo />
      {toDos?.map((toDo) =>
        <ToDo key={toDo.id} {...toDo} />
      )}
    </Wrapper >
  )
}

export default ToDoList