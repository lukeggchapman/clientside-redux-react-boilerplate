import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import {setClientId, setState} from './actionCreators';
import getClientId from './clientId';
import configureStore from './store/configureStore';
import Root from './components/Root';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

const store = configureStore(socket);
store.dispatch(setClientId(getClientId()));

ReactDOM.render(
  <Root store={store}></Root>,
  document.getElementById('app')
);