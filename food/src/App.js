import React, { Component } from 'react'
import {Typography, AppBar, Card, CardActions, Button, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Check, PhotoCamera } from '@material-ui/icons';
import Dashboard from './Dashboard';
import ShareRecipe from './ShareRecipe';
import Sharing from './components/Sharing'; 
import Foods from './Foods'
import listItem from './listItems' 

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'


class App extends Component  {
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path ="/Foods" component={Foods} />
                <Route exact path = "/ShareRecipe" component={ShareRecipe} />
                <Route exact path = "/"  component={Dashboard} />
            </Switch>
       </Router>
        )
    }
}
export default App ;