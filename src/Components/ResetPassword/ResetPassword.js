import React from 'react';
import {Avatar, Grid, Paper, TextField} from "@material-ui/core";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const ResetPassword = () => {
    const paperStyle = {
        padding: 20, height: '40vh', width: 380,
        margin: '20px auto', background: 'lightblue'
    };
    const avatarStyle = {backgroundColor: '#12c556'};
    const textFieldStyle = {margin: '15px auto'};
    const buttonStyle = {margin: '15px 80px'};
    const linkStyle = {margin: '5px auto', padding: '5px'}
    const handleOnchange = () => {
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align={'center'}>
                    <Avatar style={avatarStyle}>
                        <LockRoundedIcon/>
                    </Avatar>
                    <h2>Recover password</h2>
                </Grid>
                <TextField style={textFieldStyle} id='outlined-basic' label='e-mail' type='mail'
                           placeholder='Enter your e-mail' variant='outlined' fullWidth onChange={handleOnchange}/>
                <Button style={buttonStyle} type='submit' variant="outlined" color='primary'>Recover
                    Password</Button>
                <NavLink to='/signin' style={linkStyle}>Back to Sign In</NavLink>
            </Paper>
        </Grid>
    )
}
export default ResetPassword;