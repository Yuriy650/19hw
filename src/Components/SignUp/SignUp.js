import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar, Checkbox, Grid, Paper, TextField, Typography} from "@material-ui/core";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

const SignUp = () => {
    const paperStyle = {
        padding: 20, height: '75vh', width: 580,
        margin: '20px auto', background: 'lightblue'
    };
    const avatarStyle = {backgroundColor: '#12c556'};
    const textFieldStyle = {margin: '15px auto'};
    const buttonStyle = {margin: '15px auto'};
    const linkStyle = {margin: '5px 5px', padding: '5px'};
    const nameStyle = {width: 286, margin: '15px 2px', padding: 0};
    const handleOnSubmit = (e) => {
       e.preventDefault();
        const newUser = {
            id: Math.floor(Math.random()*100),
            firstname: e.target[0].value,
            lastName: e.target[2].value,
            email: e.target[4].value,
            password: e.target[6].value
        };
        localStorage.setItem(`${newUser.id}`, JSON.stringify(newUser));
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align={'center'}>
                    <Avatar style={avatarStyle}>
                        <LockRoundedIcon/>
                    </Avatar>
                    <h2>Sign up</h2>
                </Grid>
                <form onSubmit={handleOnSubmit}>
                <TextField style={nameStyle} name='first-name' id='first' label='first name' type='text'
                           placeholder='First Name' variant='outlined' />
                <TextField style={nameStyle} name='last-name' id='last' label='last name' type='text'
                           placeholder='Last Name' variant='outlined' />
                <TextField style={textFieldStyle} name='mail' id='email' label='e-mail' type='mail'
                           placeholder='Email Address' variant='outlined' fullWidth />
                <TextField style={textFieldStyle} name='password' id='pass' label='password' type='password'
                           placeholder='Enter your password' variant='outlined' fullWidth />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I want to receive marketing, promotions and updates via email"
                />
                <Button style={buttonStyle} type='submit' variant="outlined" color='primary' fullWidth >SIGN UP</Button>
                </form>
                <Typography>
                    <p>Already have an account?
                        <NavLink to='/signin' style={linkStyle}>Sign in</NavLink>
                    </p>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default SignUp;