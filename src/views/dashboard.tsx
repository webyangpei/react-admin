import React, { useState } from 'react';
import './dashboard.scss';

const Dashboard = () => {
    const [ count ] = useState('this is a dashborad page!')

    return (
        <div>
            <div className="main-content">{ count }</div>
        </div>
    )
}

export default Dashboard;


