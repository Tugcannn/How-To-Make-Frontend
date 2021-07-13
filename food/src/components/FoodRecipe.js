import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export const FoodRecipe = ({formData, setForm}) => {
    
  const {recipe} = formData;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Ingredients 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField 
          variant = "outlined" 
          required  
          fullWidth 
          name = "recipe"
          multiline
          rows = {20} 
          rowsMax = {200}
          value={recipe}
          onChange = {setForm}
          />
        </Grid>
        
     
       
        
      </Grid>
    </React.Fragment>
  );
}

export default FoodRecipe;