import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import ProfileCard from './ProfileCard';
function Header() {
  return (
    <div className="header">
      <Home />

      <Dashboard />
    </div>
  );
}

export default Header;
