import React from 'react';
import CustomSelect from './reusable/CustomSelect';
import ProfileCard from './ProfileCard';

function Dashboard() {
  return (
    <div className="header-second">
      <h3
        style={{
          paddingLeft: '20px',
          filter: 'drop-shadow(0 0 0.25rem #eeeae9)',
          color: '#535457',
          paddingBottom: '120px',
        }}
      >
        Assessment
      </h3>
    </div>
  );
}

export default Dashboard;
