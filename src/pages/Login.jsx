import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FaceIcon from '@mui/icons-material/Face';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { doLogin } from 'services/loginService';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const staticText = {
        signInLabel: "Sign in",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        rememberMe: "Remember me",
        signInBtnText: "Sign In",
        forgetPasswordLabel: "Forgot password?",
        dontHaveAccountLabel: "Don't have an account? Sign Up",
    }

    let navigate = useNavigate();


    const [isSessionAcitve, setIsSessionActive] = React.useState(false);

    React.useEffect(() => {
        setIsSessionActive(localStorage.getItem("isLogin") !== null ? true : false);
    }, [isSessionAcitve]);


    const handleLogin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            remember: data.get('remember')
        });

        try {
            const response = await doLogin(data.get('email'), data.get('password'));
            if (response === "login success") {
                localStorage.setItem("isLogin", "true");
                let path = `/home`;
                navigate(path);
            } else {
                localStorage.removeItem("isLogin");
                alert(response);
                console.log("error");
            }
        } catch (error) {
            localStorage.removeItem("isLogin");
            console.log(error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <FaceIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{staticText.signInLabel}</Typography>
                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" name="remember" color="primary" />}
                        label={staticText.rememberMe}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {staticText.signInBtnText}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {staticText.forgetPasswordLabel}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {staticText.dontHaveAccountLabel}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;