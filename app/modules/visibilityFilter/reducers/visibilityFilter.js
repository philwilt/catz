import * as visibilityTypes from '../constants'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case visibilityTypes.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter
