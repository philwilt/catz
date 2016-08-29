import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './modules/reducers'
import Footer from './modules/visibilityFilter/components/Footer'
import AddTodo from './modules/todos/containers/AddTodo'
import VisibleTodoList from './modules/visibilityFilter/containers/VisibleTodoList'

let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension())

render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>,
  document.getElementById('app')
)
