import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'
import {Store} from './store/Store.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
);