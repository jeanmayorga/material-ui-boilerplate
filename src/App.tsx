import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

import "./styles/App.scss";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
