import React from 'react';


class OrderList extends React.Component {
  constructor(props, state) {
    super(props);
    state = {}
  }
  UNSAFE_componentWillMount() {
    this.setState({ description: 'this is a order list page!' })
  }

  render() {
    return (
      <div>
        <div className="main-content">{ this.state.description }</div>
      </div>
    )
  }
}

export default OrderList;