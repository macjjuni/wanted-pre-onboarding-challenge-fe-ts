interface ITodoTag {
  id: string
  title: string
}
interface ITodoItem {
  id: string
  content: string
  isDone: boolean
  category: string
  tag: ITodoTag[]
}
/** 
 * ----- CREATE -----
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 */
interface IAddTodoItem {
  content: string
  category?: string
  tag?: string[]
}
type AddTodoTypes = (IAddTodoItem)=> void

/** 
 * ----- READ -----
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
type GetTodoTypes = (todoId: string) => ITodoItem

/** 
 * ----- UPDATE -----
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 */
interface IEditTodo {
  content: string
  isDone: boolean
  category?: string
  tag?: string[]
}
type EditTodoTypes = (IEditTodo) => void

/** 
 * ----- DELETE -----
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 */
type DelTodoTypes = (todoId: string) => void
type DelTodoTagsByIdTypes = (todoId: string, tagId: string[]) => void

{
  const addTodo: AddTodoTypes = (todoItem) => {}
  const getTodo:GetTodoTypes = (todoId) => {
    console.log(todoId)
    return {
      id: '01',
      content: 'todos..',
      isDone: false,
      category: 'etc',
      tag: [{
        id: '01',
        title: 'TodoTag1'
      }]
    }
  }
  const editTodo:EditTodoTypes = () => {}
  const delTodo:DelTodoTypes = (todoId) => {}
  const delAllTodo:DelTodoTypes = (todoId) => {}
  const delTodoTagsById:DelTodoTagsByIdTypes = (todoId, tagId) => {}
  const delTodoAllTags:DelTodoTypes = (todoId) => {}
}