import { combineReducers } from 'redux';
import todos from './todos/reducers/todos';
import visibilityFilter from './visibilityFilter/reducers/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
