import TodoList from '~/components/todos/TodoListComponent';
import { connect } from 'react-redux';
import { toggleTodo } from '~/components/todos/todoActions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
    case 'SHOW_ALL':
      return todos;
  }
};

const mapStateToListProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(
  mapStateToListProps,
  mapDispatchToTodoProps
)(TodoList);

export default VisibleTodoList;
