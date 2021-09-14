import React from "react";
import App from './App';
import  ReactDOM  from "react-dom";
import {render} from '@testing-library/react';
import {Provider} from 'react-redux'

it('App renders without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider>
  <App>
  </App>
  </Provider>, div)

})

it('renders correctly', () => {
  render(
    <Provider>
  <App>
  </App>
  </Provider>)
})