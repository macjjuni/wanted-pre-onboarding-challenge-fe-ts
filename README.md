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
- 잘못 된 경우 피드백 전달하기

## 🎯 구현 대상!

- [src/index.ts](https://github.com/wogha95/wanted-pre-onboarding-challenge-fe-2/blob/2nd-requirements/src/index.ts)

## 피드백

```
// 특정 할 일의 특정 태그를 수정할 수 있습니다.
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo>;

// 수정
export type updateTodoType = (
  param: Pick<Todo, "id"> & Partial<Omit<Todo, "id">>
) => Promise<Todo | undefined>;
```


## ❗️ 질문

<img width="901" alt="image" src="https://user-images.githubusercontent.com/38034518/218653507-f14cb85d-35a4-4382-81f5-18d155305a34.png">

- 어째서 파라미터 타입이 never로 바뀌는지..
