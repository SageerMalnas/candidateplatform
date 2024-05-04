import React from 'react';
// import JobList from '../components/JobList';
import JobList from '../components/JobList';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Job Listings</h1>
      <JobList />
    </div>
  );
};

export default HomePage;
