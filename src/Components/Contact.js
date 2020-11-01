import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 style={{textAlign: "center"}}>Contact Information </h1>
      <Grid container spacing={3} alignItems="stretch" direction="row" justify="space-evenly">
        <Grid item style={{textAlign: "center"}}>
            <LinkedInIcon />
        </Grid>
        <Grid item style={{textAlign: "center"}}>
            <MailOutlineIcon />
        </Grid>
        <Grid item style={{textAlign: "center"}}>
            <GitHubIcon />
        </Grid>
      </Grid>
    </div>
  );
}