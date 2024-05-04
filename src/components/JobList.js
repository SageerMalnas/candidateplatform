// import React, { useEffect } from 'react';
// import { Grid } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchJobs } from '../services/jobApi';
// import { addJobs } from '../redux/actions/jobActions';
// import JobCard from './JobCard';

// const JobList = () => {
//   const dispatch = useDispatch();
//   const jobs = useSelector(state => state.jobs);

//   useEffect(() => {
//     fetchJobs()
//       .then(data => dispatch(addJobs(data.jdList)))
//       .catch(error => console.error('Error fetching jobs:', error));
//   }, [dispatch]);

//   return (
//     <Grid container spacing={2}>
//       {jobs.map(job => (
//         <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
//           <JobCard job={job} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default JobList;

import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../services/jobApi';
import { addJobs } from '../redux/actions/jobActions';
import JobCard from './JobCard';

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchJobs();
        dispatch(addJobs(response.jdList));
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {jobs.map(job => (
        <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
