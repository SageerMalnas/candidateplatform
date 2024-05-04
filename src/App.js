// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import JobCard from './components/JobCard';
// import { fetchJobs } from './reducers/jobSlice';
// // import './styles/JobCard.styles.js'; // Optional, import your custom styles

// function App() {
//   const dispatch = useDispatch();
//   const jobs = useSelector(state => state.jobs.jobs);
//   const loading = useSelector(state => state.jobs.loading);
//   const error = useSelector(state => state.jobs.error);

//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <h1>Jobs</h1>
//       {loading && <p>Loading jobs...</p>}
//       {error && <p>Error: {error}</p>}
//       {jobs.map(job => (
//         <JobCard key={job.jdUid} jobData={job} />
//       ))}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Container } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

export default App;

