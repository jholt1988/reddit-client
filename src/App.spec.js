import React from "react";
import App from './App';
import  ReactDOM  from "react-dom";
import {render} from '@testing-library/react';

it('App renders without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App></App>, div)

})

it('renders correctly', () => {
  render(<App></App>)
})