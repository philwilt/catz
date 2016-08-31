import React, { PropTypes, PureComponent } from 'react';
import { List } from 'immutable';
import Todo from './TodoComponent';

class TodoList extends PureComponent {
  static propTypes = {
    todos: React.PropTypes.instanceOf(List).isRequired,
    onTodoClick: PropTypes.func.isRequired,
  }

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <ul>
        { todos.map(todo => (
          <Todo
            key={todo.get('id')}
            text={todo.get('text')}
            onClick={() => onTodoClick(todo.get('id'))}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
