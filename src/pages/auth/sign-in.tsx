import React, { useState } from "react";
import {
  Button,
  Typography,
  Fade,
  FormControl,
  InputAdornment,
  Input,
  IconButton,
} from "@material-ui/core";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
  LockOutlined,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

export function SignIn() {
  const history = useHistory<typeof useHistory>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [hasError, setHasError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>();
  const [pass, setPassword] = useState<string>();

  const handleLogin = () => {
    if (!email || !pass) {
      setHasError(true);
      return;
    }

    history.push("/dashboard");
  };

  return (
    <div className="middle-container">
      <Fade in={true}>
        <div className="auth-box">
          <div className="text-box">
            <Typography variant="h3">Welcome!</Typography>
            <Typography variant="body1">
              Put any words in inputs and click on login button.
            </Typography>
            <Typography variant="body1">
              Escribe cualquier cosa en los inputs y dale al boton de login.
            </Typography>
          </div>
          <div className="input-box">
            <Typography variant="h4">Login</Typography>
            <FormControl fullWidth={true}>
              <Input
                error={hasError}
                id="input-with-icon-adornment"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <Input
                error={hasError}
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <Button
                variant="contained"
                fullWidth={true}
                color="primary"
                onClick={handleLogin}
              >
                Login
              </Button>
            </FormControl>
            <FormControl fullWidth={true}>
              <Link to="/auth/signup">
                <Button variant="outlined" color="primary" fullWidth={true}>
                  Dont't have account? Signup
                </Button>
              </Link>
            </FormControl>
            <FormControl fullWidth={true} className="adding-info">
              <Link to="/auth/forgot">Forgot Password?</Link>
            </FormControl>
          </div>
        </div>
      </Fade>
    </div>
  );
}
