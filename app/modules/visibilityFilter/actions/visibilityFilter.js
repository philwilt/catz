import * as visibilityTypes from '../constants'

export const setVisibilityFilter = (filter) => (
  {
    type: visibilityTypes.SET_FILTER,
    filter,
  }
)
