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

```typescript
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo>;
```

#### updateTodo 기능 구현

```typescript
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

```typescript
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo | undefined>;
```

> return 타입에 undefined를 추가해 업데이트 실패 여부 리턴

기능구현을 하면서 id에 맞는 Todo가 없는 경우(Delete, Update) 에러 안내를 위한 리턴 타입 추가(boolean | undefined)

## 👍 느낀점

> 타입스크립트를 사용하면서 타입 오류만 지우려고 급급했던 저 자신을 반성하게 됐습니다 🥲 유틸리티 타입을 잘 활용하신 해적거북님 덕분에 부족한 부분을 확인할 수 있는 계기가 됐고 깔끔하게 작성된 코드 덕분에 수월하게 공부했습니다.

## ❗️ 질문

<img width="901" alt="image" src="https://user-images.githubusercontent.com/38034518/218653507-f14cb85d-35a4-4382-81f5-18d155305a34.png">

<br/>

- 어째서 파라미터 타입이 never로 바뀌는지 알려주실분...

## 🙇‍♂️ 질문 해결
[issue](https://github.com/macjjuni/wanted-pre-onboarding-challenge-fe-ts/issues/1)
<img width="904" alt="image" src="https://user-images.githubusercontent.com/38034518/218684051-ade39817-437d-407a-a290-f7d0622ccdab.png">

### 수정 전

```typescript
export type deleteTodoTagType = (
  param: Pick<Todo, "id" & "tags"> // Error : change to "id" & "tags" 
) => Promise<Todo | undefined>;
```
### 수정 후

```typescript
export interface Tag {
  id: string;
  name: string;
}
export type deleteTodoTagType = (
  param: Pick<Todo, "id"> & { tags: Tag[] }
) => Promise<Todo | undefined>;
```

### 해결 방법

잘못 된 타입과 "tags"를 제거하고 함수 로직에서 tags의 undefined 여부를 체크하지 않기 위해 옵셔널 체이닝을 삭제하는 방향으로 해결(함수에 버그가 있어 잠수함 패치한건 안비밀🥸)

[src/type.ts](https://github.com/macjjuni/wanted-pre-onboarding-challenge-fe-ts/blob/week/2-1/src/type.ts#L60)
