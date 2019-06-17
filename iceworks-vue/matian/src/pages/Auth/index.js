import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="auth-page">
        {/* 权限管理类的表格 */}
        <AuthorityTable />
      </div>
    );
  }
}
