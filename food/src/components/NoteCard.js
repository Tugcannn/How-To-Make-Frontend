import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {IconButton, Typography} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';

export default function NoteCard({user, handleDelete}) {
        return (
            <div>
               <Card elevation = {2} >
                   <CardHeader 
                   action = {
                       <IconButton onClick={() => handleDelete(user.id)} >
                           <DeleteOutlined />
                       </IconButton>
                   }
                   title = {user.food}
                   subheader = {user.name + " " + user.surname} 
                 
                   
                   />
                   <CardContent>
                   <Typography variant = 'body1' color="textSecondary">
                        <h3>Publish</h3>
                           {user.date}
                       </Typography>
                   <Typography variant = 'body1' color="textSecondary">
                        <h3>Region</h3>
                           {user.country}
                       </Typography>
                   <Typography variant = 'body1' color="textSecondary">
                        <h3>Calori</h3>
                           {user.calori}
                       </Typography>
                       <Typography variant = 'body1' color="textSecondary">
                        <h3>Recipe</h3>
                           {user.recipe}
                       </Typography>
                       <Typography variant = 'body1' color="textSecondary">
                           <h3>Construction</h3>
                           {user.construction}
                       </Typography>

                   </CardContent>
               </Card>
            </div>
        )
    
}
