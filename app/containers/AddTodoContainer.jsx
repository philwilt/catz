import { connect } from 'react-redux';
import { addTodo } from 'components/todos/todoActions';

let nextTodoId = 0;

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input type="text" ref={node => {
        input = node;
      }} />
      <button
        className="button"
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
        >
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo = connect()(AddTodo);
