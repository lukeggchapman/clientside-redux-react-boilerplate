import React from 'react';
import {ConnectionStateContainer} from './ConnectionState';

export default React.createClass({
  render: function () {
    return <div>
      {this.props.children}
      <ConnectionStateContainer />
    </div>;
  }
});