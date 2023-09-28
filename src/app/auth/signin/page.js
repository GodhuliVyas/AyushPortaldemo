// domain.com/auth/signin
import Button from '@mui/material/Button';
// add this in meta tag for responsiveness
// <meta name="viewport" content="initial-scale=1, width=device-width" />



function SignIn(){
    return (<div className='Container'>
        <LeftComponent/>
        <RightComponent/>
    </div>);
}

const RightComponent=()=>{
    return <h1>This is Right typography</h1>
}

const LeftComponent=()=>{
    return <h1>This is Left typography</h1>
}

export default SignIn;