# 원티드 프리온보딩 프론트엔드 챌린지 2월 2-1 주차 과제(TS)

## 📕 프리온보딩 챌린지 가이드

- [가이드 링크](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

### 📖 과제 목록

- [ ] 1-1 JSDoc 사용
- [ ] 1-2 TypeScript 사용
- [x] 2-1 구현
- [ ] 2-2 ..

## 🤾🏻‍♂️ 2-1 주차 과제

- 다른 참여자가 작성한 Todo 타입스크립트 설계를 바탕으로 구현(설계대로만 구현하는 것이 중요)
- 피드백 전달하기

## 🎯 구현 대상!

- [해적거북님](https://github.com/wogha95/wanted-pre-onboarding-challenge-fe-2/blob/2nd-requirements/src/index.ts)

## 🙄 간략한 피드백(?)

[src/index.ts](https://github.com/macjjuni/wanted-pre-onboarding-challenge-fe-ts/blob/week/2-1/src/index.ts#L40)

#### 특정 할 일의 특정 태그를 수정할 수 있습니다. (해적거북님이 작성한 타입)

```
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo>;
```

#### updateTodo 기능 구현

```
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
```

#### 리팩토링한 타입

```
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo | undefined>;
```

> return 타입에 undefined를 추가해 업데이트 실패 여부 리턴

기능구현을 하면서 id에 맞는 Todo가 없는 경우(Delete, Update) 에러 안내를 위한 리턴 타입 추가(boolean | undefined)

## ❗️ 질문

<img width="901" alt="image" src="https://user-images.githubusercontent.com/38034518/218653507-f14cb85d-35a4-4382-81f5-18d155305a34.png">

<br/>

- 어째서 파라미터 타입이 never로 바뀌는지 알려주실분...
