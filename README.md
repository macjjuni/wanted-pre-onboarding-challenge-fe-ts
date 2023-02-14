# 원티드 프리온보딩 프론트엔드 챌린지 2월 1-2 주차 과제(TS)

<br/>

## 📕 챌린지 과제 가이드

- [가이드 링크](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

> 요구 사항을 구현하지 않고 설계만합니다.

<br/>

### 📖 과제 목록

- [ ] 1-1 JSDoc
- [x] 1-2 TypeScript
- [ ] 2-1 구현
- [ ] 2-2 ..

<br>

### JSDoc 기반으로 작성한 타입

[src/index.ts](https://github.com/macjjuni/wanted-pre-onboarding-challenge-fe-ts/blob/week/1-2/src/index.ts)

```typescript
interface ITodoTag {
  id: string;
  title: string;
}
interface ITodoItem {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tag: ITodoTag[];
}
/**
 * ----- CREATE -----
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 */
interface IAddTodoItem {
  content: string;
  category?: string;
  tag?: string[];
}
type AddTodoTypes = (IAddTodoItem) => void;

/**
 * ----- READ -----
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
type GetTodoTypes = (todoId: string) => ITodoItem;

/**
 * ----- UPDATE -----
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 */
interface IEditTodo {
  content: string;
  isDone: boolean;
  category?: string;
  tag?: string[];
}
type EditTodoTypes = (IEditTodo) => void;

/**
 * ----- DELETE -----
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 */
type DelTodoTypes = (todoId: string) => void;
type DelTodoTagsByIdTypes = (todoId: string, tagId: string[]) => void;

{
  const addTodo: AddTodoTypes = (todoItem) => {};
  const getTodo: GetTodoTypes = (todoId) => {
    console.log(todoId);
    return {
      id: "01",
      content: "todos..",
      isDone: false,
      category: "etc",
      tag: [
        {
          id: "01",
          title: "TodoTag1",
        },
      ],
    };
  };
  const editTodo: EditTodoTypes = () => {};
  const delTodo: DelTodoTypes = (todoId) => {};
  const delAllTodo: DelTodoTypes = (todoId) => {};
  const delTodoTagsById: DelTodoTagsByIdTypes = (todoId, tagId) => {};
  const delTodoAllTags: DelTodoTypes = (todoId) => {};
}
```
