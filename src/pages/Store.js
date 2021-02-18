import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import "../App.css";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import "@fontsource/roboto";

const useStyles = makeStyles((theme) => ({

}));

function Store() {
  const classes = useStyles();

  return (
    <div className="view">
    <Typography variant="h1">5</Typography>
    </div>
  );
}

export default Store;
