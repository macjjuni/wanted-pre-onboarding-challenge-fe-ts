import type {
  Tag,
  Todo,
  createTodoType,
  readAllTodoType,
  readTodoType,
  updateTodoType,
  deletetodoType,
  deleteAllTodoType,
  deleteTodoTagType,
  deleteTodoAllTagType,
} from "./type";

const TodoList: Todo[] = [];

// Todo를 생성하는 함수입니다.
const createTodo: createTodoType = async (param) => {
  const newTodo = {
    ...param,
    id: (TodoList.length++).toString(),
    isDone: false,
  };
  TodoList.push(newTodo);
  return newTodo;
};

// 모든 Todo를 조회할 수 있습니다.
const readAllTodo: readAllTodoType = async () => {
  return TodoList;
};

// ID를 기반으로 특정 Todo를 조회할 수 있습니다.
const readTodo: readTodoType = async ({ id }) => {
  const targetTodo = TodoList.find((todo) => todo.id === id);
  return targetTodo;
};

// ID를 제외한 모든 속성을 수정할 수 있습니다.
// 특정 할 일의 특정 태그를 수정할 수 있습니다.
const updateTodo: updateTodoType = async (todoData) => {
  const targetIdx = TodoList.findIndex((todo) => todo.id === todoData.id);
  if (targetIdx === -1) return undefined;
  const updateTodo = {
    ...TodoList[targetIdx],
    ...todoData,
  };
  TodoList.splice(targetIdx, 1, updateTodo);
  return updateTodo;
};

// ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
const deleteTodo: deletetodoType = async ({ id }) => {
  const targetIdx = TodoList.findIndex((todo) => todo.id === id);
  if (targetIdx === -1) return false;
  const returnVal = TodoList[targetIdx];
  TodoList.splice(targetIdx, 1);
  return true;
};

// 모든 할 일을 제거할 수 있습니다.
const deleteAllTodo: deleteAllTodoType = async () => {
  try {
    TodoList.splice(0);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

const deleteTodoTag: deleteTodoTagType = async ({ id, tags }) => {
  const targetTodoIdx = TodoList.findIndex((todo) => todo.id === id);
  if (targetTodoIdx === -1) return undefined;
  const targetTagIndex =
    TodoList[targetTodoIdx].tags?.findIndex((tag) => tag.id === tags) || -1;
  if (targetTagIndex === -1) return undefined;
  TodoList[targetTodoIdx].tags?.splice(targetTagIndex, 1);
  return TodoList[targetTodoIdx];
};

// 특정 할 일의 모든 태그를 제거할 수 있습니다.
const deleteTodlAllTag: deleteTodoAllTagType = async ({ id }) => {
  const targetIdx = TodoList.findIndex((todo) => todo.id === id);
  if (targetIdx === -1) return undefined;
  TodoList[targetIdx].tags?.splice(0);
  return TodoList[targetIdx];
};
