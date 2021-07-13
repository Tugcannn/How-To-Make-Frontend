import React, {Component} from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Information from './Information';
import FoodRecipe from './FoodRecipe';
import HowToMake from './HowToMake';
import axios from 'axios';
import {useForm, useStep } from "react-hooks-helper";
import ReactDOM from "react-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Tuğcan Hoşer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



 const defaultData = {
   name:'',
   surname:'',
   food:'',
   country:'',
   calori:0,
   recipe:'',
   construction:'',
 }; 
 
 
 const x = {y:1}; 

export const  Sharing = () => {
  

  function onCreatePost(e) {
    if (x.y == 1) {
    axios
        .post(
            `http://localhost:7000/users/post`,
            formData,
        ) 
      x.y = (x.y + 2) ;
    }
    else ;      
  }

  const steps = ['Personal Information', 'Food Recipes', 'How To Make'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Information {...props} />;
    case 1:
      return <FoodRecipe {...props}  />;
    case 2:
      return <HowToMake {...props} />;
    default:
      throw new Error('Unknown step');
  }
}

  const [formData, setForm] = useForm(defaultData);

  const props = {formData, setForm}
  


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
          Share Your Recipe!
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              
              <React.Fragment>
                 {onCreatePost()}
                <Typography variant="h5" gutterBottom>
                Thank you for sharing with us
                </Typography>
               
               
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Share' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
export default Sharing;