import * as todoTypes from './constants';
import { List, Map } from 'immutable'

const todo = (state = Map(), action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return Map({
        id: action.id,
        text: action.text,
        completed: false,
      });
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

const todos = (state = List(), action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return state.unshift(todo(undefined, action))
    case todoTypes.TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
