/** @author 꾸생 <macjjuni@gmail.com> */
/** @version 1.0 */

/**
 * Todo 주요 객체
 * 
 * @class
 * @property {string} id 				ID 식별자(require)
 * @property {string} content 	내용(require)
 * @property {boolean} isDone 	완료여부(require)
 * @property {string} category 	카테고리(optional)
 * @property {string[]} tag 		태그(optional)
 */
class Todo {}

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @construcor
 * @param {string} content - (require)
 * @param {string} category - (optional)
 * @param {string[]} tag - (optional)
 * @returns { }
 */
const addTodo = () => {}

/**
 * Todo를 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @construcor
 * @param {string} id - (require)
 * @returns {Todo}
 */
const getTodo = () => {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @construcor
 * @param {string} content - (require)
 * @param {string} isDone - (require)
 * @param {string} category - (optional)
 * @param {string} tag - (optional)
 * @returns {void}
 */
const editTodo = () => {}


/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @construcor
 * @param {string} id - (require)
 * @returns {void}
 */
const delTodo = (id) => {}
