import { PropTypes } from 'react'
import PureComponent from './PureComponent'

class Todo extends PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    completed: React.PropTypes.bool,
    onClick: React.PropTypes.func
  }

  render() {
    const { text, completed, onClick } = this.props;

    return (
      <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </li>
    );
  }
}

export default Todo
