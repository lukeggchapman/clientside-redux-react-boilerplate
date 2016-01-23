import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import remoteActionMiddleware from './remoteActionMiddleware';
import DevTools from '../components/DevTools';

export default function configureStore(socket, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      remoteActionMiddleware(socket)
    ),
    DevTools.instrument()
  )(createStore);
  const store = createStoreWithMiddleware(reducer, initialState);

  // Hot reload reducer
  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer')/* .default if you use Babel 6+ */)
    );
  }

  return store;
};
