import React from 'react';
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props, state) {
    super(props);
    state = {}
  }
  UNSAFE_componentWillMount() {
    this.setState({ count: 'this is a dashboard page!' })
  }

  render() {
    return (
      <div>
        <div className="main-content">{ this.state.count }</div>
      </div>
    )
  }
}

export default Dashboard;