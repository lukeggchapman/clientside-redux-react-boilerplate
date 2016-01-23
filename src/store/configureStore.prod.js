import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import remoteActionMiddleware from './remoteActionMiddleware';

export default function configureStore(socket, initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
  )(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};
