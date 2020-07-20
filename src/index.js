import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './assets/styles/styles.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/main'

const initialState = {
  userData: {
    currentPage: 2,
    maxPage: 2
  },
  editor: {
    isLoading: true,
    rows: 0,
    columns: 0,
    divs: [],
    currentItem: null
  },
  modal: {
    isOpen: false
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const container = document.getElementById("app")

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, container
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}