// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom'; // Optional for adding a link to the job details page

// const useStyles = makeStyles({
//   card: {
//     marginBottom: 16,
//   },
//   jobDetails: {
//     whiteSpace: 'pre-wrap', // Preserve line breaks from API
//   },
//   companyLogo: {
//     width: 50,
//     height: 50,
//     marginRight: 16,
//   },
// });

// const JobCard = ({ jobData }) => {
//   const classes = useStyles();

//   // Optional: Truncate job description to a certain length
//   const truncateDescription = (text, maxLength) => {
//     return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
//   };

//   const shortDescription = truncateDescription(jobData.jobDetailsFromCompany, 150); // Adjust maxLength as needed

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         {jobData.logoUrl && ( // Display company logo if available
//           <img src={jobData.logoUrl} alt={jobData.companyName} className={classes.companyLogo} />
//         )}
//         <Typography variant="h5" component="h2">
//           <Link to={`/jobs/${jobData.jdUid}`}> {/* Replace with your routing path if using Link */}
//             {jobData.companyName} - {jobData.jobRole}
//           </Link>
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Location: {jobData.location}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" className={classes.jobDetails}>
//           Job Details: {shortDescription}
//         </Typography>
//         {jobData.jobDetailsFromCompany.length > 150 && ( // Show "Read More" if description is truncated
//           <Link to={`/jobs/${jobData.jdUid}`}>Read More</Link> 
//         )};
//         <Typography variant="body2" color="textSecondary">
//           Experience: {jobData.minExp} - {jobData.maxExp} years
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Salary: {jobData.minJdSalary} - {jobData.maxJdSalary} {jobData.salaryCurrencyCode} (estimated)
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default JobCard;

// import React from 'react';
// import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

// const JobCard = ({ job }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">{job.companyName}</Typography>
//         <Typography variant="subtitle1" color="textSecondary">{job.location}</Typography>
//         <Typography variant="subtitle2" color="textSecondary">{job.jobRole}</Typography>
//         <Typography variant="body2">{job.jobDetailsFromCompany}</Typography>
//       </CardContent>
//       <CardActions>
//         <Button href={job.jdLink} target="_blank">Apply</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default JobCard;

import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card className="job-card" variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.companyName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Location: {job.location}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Job Role: {job.jobRole}
        </Typography>
        <Typography variant="body2" component="p">
          {job.jobDetailsFromCompany}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Experience: {job.minExp} - {job.maxExp} years
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}
        </Typography>
        <Button variant="contained" color="primary" href={job.jdLink} target="_blank">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
