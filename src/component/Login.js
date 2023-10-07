import React, {useState} from 'react';
import {Button, TextField, Paper, Typography, Link, Grid, Box, Toolbar, AppBar} from '@mui/material';
import bannerLogo from "../images/bannerLogo.png"
import banner from "../images/banner.png"

function Login() {

    return (
        <div className="App">
            <Box>
                <Typography direction={'row'} spacing={5} paddingTop={5}><h1>LOGIN</h1></Typography>
                <Typography mt={5}>Sign in with email</Typography>
                <Grid>
                    <Grid item xs={8} mt={5}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: 'calc(30%)'}}/>
                    </Grid>
                    <Grid item xs={8} mt={5}>
                        <TextField id="outlined-basic" label="Password" variant="outlined"
                                   style={{width: 'calc(30%)'}}/>
                    </Grid>
                </Grid>
                <Typography paddingLeft={40} mt={5} variant="body2" style={{marginTop: '10px'}}>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </Typography><br/>
                <Button paddingTop={10} variant="contained" disableElevation
                        style={{backgroundColor: '#FF1541', width: 'calc(30%)'}}>
                    Login
                </Button><br/>
                <Typography variant="body2" style={{marginTop: '10px'}}>
                    Not account yet? <Link to={'/signup'}>Create an account</Link>
                </Typography>
            </Box>
            <br/><br/><br/>
        </div>
    );
}

export default Login;
