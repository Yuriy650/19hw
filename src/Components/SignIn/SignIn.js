import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar, Grid, Typography} from "@material-ui/core";
import {Paper} from '@material-ui/core';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import {TextField} from "@material-ui/core";
import {Checkbox} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
const SignIn = (props) => {
    const paperStyle = {
        padding: 20, height: '70vh', width: 380,
        margin: '20px auto', background: 'lightblue'
    };
    const avatarStyle = {backgroundColor: '#12c556'};
    const textFieldStyle = {margin: '15px auto', color: 'white'};
    const buttonStyle = {margin: '15px auto'};
    const linkStyle = {margin: '5px auto', padding: '5px'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align={'center'}>
                    <Avatar style={avatarStyle}>
                        <LockRoundedIcon/>
                    </Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField style={textFieldStyle} id='outlined-basic' label='e-mail' type='mail'
                           placeholder='Email Address' variant='outlined' fullWidth/>
                <TextField style={textFieldStyle} id='outlined-basic' label='password' type='password'
                           placeholder='Enter your password' variant='outlined' fullWidth/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button style={buttonStyle} type='submit' variant="outlined" color='primary' fullWidth>SIGN IN</Button>
                <Typography style={linkStyle}>
                    <NavLink to='/resetpassword'>Forgot password?</NavLink>
                </Typography>
                <Typography>
                    <p>Do you have an account?
                        <NavLink to='/signup' style={linkStyle}>Sign up</NavLink>
                    </p>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default SignIn;