import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { toJS } from 'mobx';
import { createBrowserHistory } from 'history';
import { App } from 'app';
import RootStore from './app/stores/RootStore';

// prepare history
const history = createBrowserHistory();
//const { Provider } = StoreContext 
console.log("store",RootStore)
// render react DOM
ReactDOM.render(
    <Provider {...RootStore}>
         <App history={history} />   
    </Provider>
, document.getElementById('root'));
