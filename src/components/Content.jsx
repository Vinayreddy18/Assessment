import React from 'react';
import DailyVisitors from './DailyVisitors';
import RealtimeUsers from './RealtimeUsers';
import TotalVisits from './TotalVists';
import BounceRate from './BounceRate';
import VisitDuration from './VisitDuration';
import Footer from './Footer';
import ProfileCard from './ProfileCard';

function Content() {
  return (
    <div>
      <div className="profile1">
        <ProfileCard />
      </div>
      <div className="content">
        <BounceRate />
        <VisitDuration />
        <RealtimeUsers />
        <TotalVisits />
      </div>

      <div className="content1">
        <DailyVisitors />
      </div>

      <Footer />
    </div>
  );
}

export default Content;
