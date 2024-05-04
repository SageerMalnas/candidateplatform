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
