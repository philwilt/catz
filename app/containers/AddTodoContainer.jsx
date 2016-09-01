import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '~/components/todos/todoActions';

class AddTodo extends PureComponent {
  render () {
    const { dispatch } = this.props;

    let input;

    return (
      <div>
        <input
          type="text"
          ref={node => {
            input = node;
          }}
        />
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
  }

};

AddTodo.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default AddTodo = connect()(AddTodo);
