import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  jobCard: {
    
    boxShadow: '1px 7px 9px rgba(1, 1, 8, 0.1)',
    borderRadius: '25px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px'
  },
  companyLogo: {
    width: '60px',
    height: 'auto',
    marginRight: '1rem',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'left'
  },
 
  jobDetails: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  applyButton: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#39efc3',
  },
  refButton:{
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#2a46b9',
  }
});

const JobCard = ({ job }) => {
  const classes = useStyles();

  return (
    <Card className={`${classes.jobCard} `} variant="outlined">
      <CardContent>
        <div className={classes.infoContainer}>
          <div className={classes.imageClass}>
            {job.logoUrl && <img className={classes.companyLogo} src={job.logoUrl} alt={job.companyName} />}
          </div>
          <div className={classes.jobDetails}>
            <Typography variant="h6" component="h6">
              {job.companyName}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {job.jobRole} 
            </Typography>
            <Typography color="textSecondary" gutterBottom>
             {job.location}
            </Typography>
          </div>
        </div>
        <Typography color="textSecondary" gutterBottom>
          Estimated Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}
        </Typography>
        <Typography>
          About Company
        </Typography>
        <Typography>
          About Us
        </Typography>

        <Typography variant="body2" component="p">
          {job.jobDetailsFromCompany}

        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Minimum Experience
          <br/>
           {job.minExp} years
        </Typography>
        
        <Button className={classes.applyButton} variant="contained" color="primary" href={job.jdLink} target="_blank">
        ⚡Easy Apply
        </Button>
        <Button className={classes.refButton} variant="contained"  target="_blank">
          Unlock Referral Ads
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
