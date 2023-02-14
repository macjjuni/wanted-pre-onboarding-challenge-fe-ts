// Git Repo: https://github.com/wogha95/wanted-pre-onboarding-challenge-fe-2/blob/2nd-requirements/src/index.ts

export interface Tag {
  id: string;
  name: string;
}

export interface Todo {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags?: Tag[];
}

// Todo를 생성하는 함수입니다.
export type createTodoType = (
  param: Pick<Todo, "content" | "category" | "tags">
) => Promise<Todo>;

// 모든 Todo를 조회할 수 있습니다.
export type readAllTodoType = () => Promise<Todo[]>;

// ID를 기반으로 특정 Todo를 조회할 수 있습니다.
// export type readTodoType = (param: Pick<Todo, "id">) => Promise<Todo>;

// 수정
export type readTodoType = (
  param: Pick<Todo, "id">
) => Promise<Todo | undefined>;

// ID를 제외한 모든 속성을 수정할 수 있습니다.
// 특정 할 일의 특정 태그를 수정할 수 있습니다.
// export type updateTodoType = (
//   param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
// ) => Promise<Todo>;

// 수정
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo | undefined>;

// ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
// export type deletetodoType = (param: Pick<Todo, "id">) => Promise<Todo>;

// 수정
export type deletetodoType = (param: Pick<Todo, "id">) => Promise<boolean>;

// 모든 할 일을 제거할 수 있습니다.
// const deleteAllTodo: deleteAllTodoType = async () => {};
// 수정해본 타입
export type deleteAllTodoType = () => Promise<boolean>;

// 특정 할 일의 특정 태그를 삭제할 수 있습니다.
// export type deleteTodoTagType = (
//   param: Pick<Todo, "id" & "tags">
// ) => Promise<Todo>;

// 수정
export type deleteTodoTagType = (
  param: Pick<Todo, "id" & "tags">
) => Promise<Todo | undefined>;

// 특정 할 일의 모든 태그를 제거할 수 있습니다.
// export type deleteTodoAllTagType = (param: Pick<Todo, "id">) => Promise<Todo>;

// 수정
export type deleteTodoAllTagType = (
  param: Pick<Todo, "id">
) => Promise<Todo | undefined>;
