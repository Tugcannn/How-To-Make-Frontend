import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';




export const HowToMake = ({formData, setForm}) => {
  
  
  const {construction} = formData;
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Directions 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField 
          required
          variant = "outlined"  
          fullWidth 
          name = "construction"
          multiline
          rows = {20} 
          rowsMax = {200}
          value={construction}
          onChange = {setForm}
          />        
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default HowToMake;