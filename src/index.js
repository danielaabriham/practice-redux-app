import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

const render = () => {
  fancyLog()
  return ReactDOM.render(<App />, document.getElementById("root"))
}

render()
function fancyLog() {
  console.log(store.getState())
}

store.subscribe(render)