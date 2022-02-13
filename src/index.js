import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import { store } from './store'
import { App } from './App'
import React from 'react'

ReactDom.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.querySelector('#root')
)