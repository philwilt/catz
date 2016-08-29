import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Filters from './containers/FiltersContainer'
import AddTodo from './containers/AddTodoContainer'
import VisibleTodoList from './containers/VisibleTodoListContainer'

let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension())

render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Filters />
    </div>
  </Provider>,
  document.getElementById('app')
)
