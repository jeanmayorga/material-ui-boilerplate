import React from "react";
import {
  Button,
  Typography,
  Fade,
  FormControl,
  InputAdornment,
  Input,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

export function Forgot() {
  return (
    <div className="middle-container">
      <Fade in={true}>
        <div className="auth-box">
          <div className="text-box">
            <Typography variant="h3">Forgot your password?</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              rem harum dolor dolore? Repudiandae excepturi adipisci.
            </Typography>
          </div>
          <div className="input-box">
            <Typography variant="h4">Recover</Typography>
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
              <Button variant="contained" fullWidth={true} color="primary">
                Send Email
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
