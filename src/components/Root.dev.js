import React from 'react';
import Router from 'react-router';
import {Provider} from 'react-redux';
import DevTools from './DevTools';
import routes from '../routes';

export default React.createClass({
  render: function () {
    const {store} = this.props;

    return <Provider store={store}>
      <div>
        <Router>{routes}</Router>
        <DevTools />
      </div>
    </Provider>;
  }
});