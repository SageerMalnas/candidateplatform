
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
//     const fetchData = async () => {
//       try {
//         const response = await fetchJobs();
//         dispatch(addJobs(response.jdList));
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };

//     fetchData();
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


// import React, { useEffect, useState } from 'react';
// import { Grid } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchJobs } from '../services/jobApi';
// import { addJobs } from '../redux/actions/jobActions';
// import JobCard from './JobCard';
// import Filter from './filter';

// const JobList = () => {
//   const dispatch = useDispatch();
//   const jobs = useSelector(state => state.jobs);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [filters, setFilters] = useState({
//     experience: '',
//     search: '',
//     location: '',
//     salary: '',
//     role: '',
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchJobs();
//         dispatch(addJobs(response.jdList));
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   useEffect(() => {
//     const applyFilters = () => {
//       const filtered = jobs.filter(job => {
//         const matchesExperience = filters.experience === '' || job.minExp === filters.experience;
//         const matchesLocation = filters.location === '' || job.location === filters.location;
//         const matchesSearch = filters.search === '' || job.companyName.toLowerCase().includes(filters.search.toLowerCase());
//         const matchesSalary = filters.salary === '' || (job.minJdSalary || job.maxJdSalary) === filters.salary;
//         const matchesRole = filters.role === '' || job.jobRole?.toLowerCase().includes(filters.role.toLowerCase());
//         return matchesExperience && matchesLocation && matchesSearch && matchesSalary && matchesRole;
//       });
//       setFilteredJobs(filtered);
//     };
  
//     applyFilters();
//   }, [jobs, filters]);
  

//   const handleFilterChange = (name, value) => {
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <Filter onFilterChange={handleFilterChange} />
//       <Grid container spacing={2}>
//         {filteredJobs.map(job => (
//           <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
//             <JobCard job={job} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default JobList;


import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../services/jobApi';
import { addJobs } from '../redux/actions/jobActions';
import JobCard from './JobCard';
import Filter from './filter';

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    experience: '',
    search: '',
    location: '',
    minSalary: '',
    maxSalary: '',
    role: '',
  });

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

  useEffect(() => {
    const applyFilters = () => {
      const filtered = jobs.filter(job => {
        const matchesExperience = filters.experience === '' || job.minExp == filters.experience && job.maxExp >= filters.experience;
        const matchesLocation = filters.location === '' || job.location === filters.location;
        const matchesSearch = filters.search === '' || job.companyName.toLowerCase().includes(filters.search.toLowerCase());
        const matchesSalary = (filters.minSalary === '' || job.minJdSalary == filters.minSalary) && (filters.maxSalary === '' || job.maxJdSalary == filters.maxSalary);
        const matchesRole = filters.role === '' || job.jobRole?.toLowerCase().includes(filters.role.toLowerCase());
        return matchesExperience && matchesLocation && matchesSearch && matchesSalary && matchesRole;
      });
      setFilteredJobs(filtered);
    };
  
    applyFilters();
  }, [jobs, filters]);
  

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Grid container spacing={2}>
        {filteredJobs.map(job => (
          <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobList;
