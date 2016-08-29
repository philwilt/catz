import { combineReducers } from 'redux';
import todos from './todos/todosReducer';
import visibilityFilter from './visibilityFilter/visibilityFilterReducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
