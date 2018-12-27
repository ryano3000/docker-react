import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders witho5ut crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

