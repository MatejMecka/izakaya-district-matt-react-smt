import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import LogInWithAlbedo from './AlbedoButton'
import albedo from "@albedo-link/intent";

class AlbedoLogin extends Component {
        render() {
           return( 
           <div>
                <Typography variant="h2" component="h1" gutterBottom>
                Sticky footer
                </Typography>
                <LogInWithAlbedo></LogInWithAlbedo>
                <Typography variant="h5" component="h2" gutterBottom>
                {'Pin a footer to the bottom of the viewport.'}
                {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </div>
            )
    }
}

export default AlbedoLogin