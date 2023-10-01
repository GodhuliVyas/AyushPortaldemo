// domain.com/auth/signin

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signInStyles.css';
import { Poppins } from 'next/font/google';
import { Input } from '@mui/material';


const LeftCont = () => {
    const [userType, setUserType] = React.useState(''); // Added user type state

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <section className='leftCont'>
            <div className='form'>
                <Typography variant='h3' align='left' fontWeight={800}>SignUp</Typography>
                <Input size='large' variant='caption' sx={{ marginTop: 5 }} fullWidth label="fullName" placeholder="Fullname" />
                <Input size='large' variant='caption' sx={{ marginTop: 2 }} fullWidth label="contact" placeholder="Contact" />
                <Input size='large' variant='caption' sx={{ marginTop: 2 }} fullWidth label="email" placeholder="Email-ID" />
                <Input size='small' variant='caption' type='password' sx={{ marginTop: 1, marginBottom: 2 }} fullWidth label="password" placeholder="Password" />
                <Input size='large' variant='caption' type='password' sx={{ marginTop: 2 }} fullWidth label="confirmPassword" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

                {/* User Type Radio Buttons */}
                <div>
                    <Typography variant='caption' align='left' sx={{ marginTop: 2 }}>User Type:</Typography>
                    <label>
                        <input
                            type="radio"
                            name="userType"
                            value="startupFounder"
                            onChange={handleUserTypeChange}
                            checked={userType === "startupFounder"}
                        />
                        Startup Founder
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="userType"
                            value="investor"
                            onChange={handleUserTypeChange}
                            checked={userType === "investor"}
                        />
                        Investor
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="userType"
                            value="publicUser"
                            onChange={handleUserTypeChange}
                            checked={userType === "publicUser"}
                        />
                        Public User
                    </label>
                </div>

                <br />
                <Button sx={{ borderRadius: 2, marginTop: 5, backgroundColor: '#4046E6', color: 'white', '&:hover': { backgroundColor: '#262ce9' } }} textTransform="none" fullWidth variant='Contained'>SignUp</Button>
                <Typography variant='caption' align='left'>Already have an account</Typography>
                <Button sx={{ borderRadius: 2, marginTop: 5, backgroundColor: '#333437', color: 'white', '&:hover': { backgroundColor: '#222' } }} textTransform="none" align='right' variant='Contained'>Login</Button>
            </div>
        </section>
    );
}

export default SignUp;
