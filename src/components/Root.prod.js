import React from 'react';
import Router from 'react-router';
import {Provider} from 'react-redux';
import routes from '../routes';

export default React.createClass({
  render: function () {
    const {store} = this.props;

    return <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>;
  }
});