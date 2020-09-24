import React from 'react';

type IState = {
    description?: string
}

class OrderList extends React.Component<{}, IState> {

  readonly state = {} as IState

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