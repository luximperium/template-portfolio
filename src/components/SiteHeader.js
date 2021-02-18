import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import "../App.css";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import APIURL from '../environments/environments';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: theme.spacing(4),
    padding: "2px",
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  appBar: {
    zIndex: "1",
    backgroundColor: theme.palette.primary.main
  },
}));

function SiteHeader() {
  const classes = useStyles();

  useEffect(() => {
    fetch(`${APIURL}/site-elements`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        
      });
  },[])

  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appBar} position="static">
        <Typography
          variant="h3"
          color="inherit"
          className={classes.title}
          noWrap
        >
          Lux Imperium
        </Typography>
      </AppBar>
    </div>
  );
}

export default SiteHeader;
