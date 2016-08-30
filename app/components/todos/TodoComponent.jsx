import React, { PropTypes } from 'react';
import PureComponent from '~/components/PureComponent';

class Todo extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    completed: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  }

  render() {
    const { text, completed, onClick } = this.props;

    return (
      <li
        className={`todo complete-${completed}`}
        onClick={onClick}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
