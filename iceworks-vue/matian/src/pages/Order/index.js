import React, { Component } from 'react';
import InfiniteScrollCellMeasurer from './components/InfiniteScrollCellMeasurer';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="order-page">
        {/* 无限滚动的表格 */}
        <InfiniteScrollCellMeasurer />
      </div>
    );
  }
}
