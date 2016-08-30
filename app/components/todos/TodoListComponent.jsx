import React, { PropTypes } from 'react';
import PureComponent from '~/components/PureComponent';
import Todo from './TodoComponent';

class TodoList extends PureComponent {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
  }

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <ul>
        { todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
