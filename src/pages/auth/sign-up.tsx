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
  EmojiPeopleOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="middle-container">
      <Fade in={true}>
        <div className="auth-box">
          <div className="text-box">
            <Typography variant="h3">Trust in us!</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              rem harum dolor dolore? Repudiandae excepturi adipisci.
            </Typography>
          </div>
          <div className="input-box">
            <Typography variant="h4">Signup</Typography>
            <FormControl fullWidth={true}>
              <Input
                id="input-with-icon-adornment"
                placeholder="Full Name"
                startAdornment={
                  <InputAdornment position="start">
                    <EmojiPeopleOutlined />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <Input
                id="input-with-icon-adornment"
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={() => setShowPassword(true)}
                placeholder="Password"
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
              <Button variant="contained" fullWidth={true} color="primary">
                Signup
              </Button>
            </FormControl>
            <FormControl fullWidth={true}>
              <Link to="/auth/signin">
                <Button variant="outlined" color="primary" fullWidth={true}>
                  Do you have account? Signin
                </Button>
              </Link>
            </FormControl>
          </div>
        </div>
      </Fade>
    </div>
  );
}
