import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import Home from './pages/home';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
