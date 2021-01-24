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
    const newUser = {};
    const handleOnChange = (e) => {
        newUser[e.target.name] = e.target.value;
        localStorage.setItem('newUser', JSON.stringify(newUser));
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
                <TextField style={nameStyle} name='first-name' id='outlined-basic' label='first name' type='text'
                           placeholder='First Name' variant='outlined' onChange={handleOnChange}/>
                <TextField style={nameStyle} name='last-name' id='outlined-basic' label='last name' type='text'
                           placeholder='Last Name' variant='outlined' onChange={handleOnChange}/>
                <TextField style={textFieldStyle} name='mail' id='outlined-basic' label='e-mail' type='mail'
                           placeholder='Email Address' variant='outlined' fullWidth onChange={handleOnChange}/>
                <TextField style={textFieldStyle} name='password' id='outlined-basic' label='password' type='password'
                           placeholder='Enter your password' variant='outlined' fullWidth onChange={handleOnChange}/>
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