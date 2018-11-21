import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { ISelectComponent } from './actions';
import { selectComponent } from './reducers';
import registerServiceWorker from './registerServiceWorker';

import Layout from './Layout';
import { IStoreState } from './types';

const store = createStore<IStoreState, ISelectComponent, any, any>(selectComponent, {
  selectedComponent: '',
});

ReactDOM.render(
  <Layout store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
