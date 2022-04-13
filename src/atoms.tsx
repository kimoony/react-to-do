import { atom, selector } from "recoil";

// enum => 계속해서 써야하는 값을 저장할 수 있는 도구
export enum Categories {
  // 아래와 같이 "TO_DO" = "TO_DO", 이렇게 하는 이유는
  // 이렇게 하지 않고 "TO_DO", 만 입력하면 enum은 숫자로 반환하기 때문
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE"
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})


// selector = atom의 output을 변형시키는 도구
// atom은 단순히 배열을 줄 뿐, atom = []
// selector 는 state를 가져다가 뭔가를 return 한다. => derived state

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {   // get function 을 이용하면 selector 내부로 atom을 받을 수 있다.
    const toDos = get(toDoState)
    const category = get(categoryState)
    return toDos.filter((toDo) => toDo.category === category);
  }
})