import React from 'react';

class Dashboard extends React.Component {
  constructor(props, state) {
    super(props);
    state = {}
  }
  UNSAFE_componentWillMount() {
    this.setState({ a: 1 })
  }

  render() {
    return (
      <div>
        this is a dashboard page!
        <div>{ this.state.a }</div>
      </div>
    )
  }
}

export default Dashboard;