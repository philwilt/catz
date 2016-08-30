import { combineReducers } from 'redux';
import todos from '~/components/todos/todosReducer';
import visibilityFilter from '~/components/visibilityFilter/visibilityFilterReducer';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
