import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmailIcon from '@material-ui/icons/Email';
import ShareRecipe from './ShareRecipe';
import Button from '@material-ui/core/Button';
import Foods from './Foods';
import Dashboard from './Dashboard';



import {
  useHistory,
  BrowserRouter as Router,
  Route
} from 'react-router-dom' 
import { Link } from "react-router-dom";




export const mainListItems = (

  <div>
    <Router>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button component={Link} to="/Foods">
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Food" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button component={Link} to="/ShareRecipe">
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Share A Recipe" />
    </ListItem>
    <ListItem button component="a" href="https://www.google.com">
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
     <ListItemText primary="Contact" />
    </ListItem>
    </Router>
  </div>
);

