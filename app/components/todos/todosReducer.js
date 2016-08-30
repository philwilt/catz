import * as todoTypes from './constants';

const todo = (state = {}, action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case todoTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return [
        todo(undefined, action),
        ...state,
      ];
    case todoTypes.TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
