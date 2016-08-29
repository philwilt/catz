import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

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
