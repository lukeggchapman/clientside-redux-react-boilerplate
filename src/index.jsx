import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import {setClientId, setState, setConnectionState} from './actionCreators';
import getClientId from './clientId';
import configureStore from './store/configureStore';
import Root from './components/Root';
import './styles/main.scss';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);
[
  'connect',
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed'
].forEach(ev =>
  socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

const store = configureStore(socket);
store.dispatch(setClientId(getClientId()));

ReactDOM.render(
  <Root store={store}></Root>,
  document.getElementById('app')
);