import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Sharing from './Sharing';
import { useState } from 'react';



export const Information = ({formData, setForm}) => {
  
  
 // const {name,surname,food,country ,calori, setName, setSurname, setFood, setCountry, setCalori} = this.props;
  const {name , surname, calori, food, country} = formData;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={name}
            onChange = {setForm}
      
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="surname"
            name="surname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={surname}
            onChange = {setForm}   
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="food"
            name="food"
            label="The name of the recipe"
            fullWidth
            autoComplete="shipping address-line1"
            value={food}
            onChange = {setForm}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value={country}
            onChange = {setForm}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="calori"
            name="calori"
            label="Calori"
            fullWidth
            autoComplete="shipping country"
            value={calori}
            onChange = {setForm}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Information;