import React, { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  List,
  Hidden,
} from "@material-ui/core";
import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import StoreIcon from "@material-ui/icons/Store";
import CommentTwoToneIcon from "@material-ui/icons/CommentTwoTone";
import EmailIcon from "@material-ui/icons/Email";
import clsx from "clsx";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Email from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e57373",
      dark: "#000000",
    },
    secondary: {
      main: "#ffcc80",
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
  },
  siteHeaderComponent: {},
  mainHeader: {
    position: "fixed",
    width: "100vw",
  },
  mainContent: {
    position: "fixed",
    zIndex: "-1",
    transform: "translateY(124px)",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
  nav: {
    zIndex: "1",
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    maxWidth: "10vw",
    height: "100vh",
    background: theme.palette.secondary.light,
    color: "black",
  },
  drawerContainer: {
    overflow: "hidden",
  },
  icon: {
    color: "black",
  },
  mainSpace: {
    transform: "translateY(64px)",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    paddingLeft: "-20px",
    paddingRight: "59px",
  },
  firstClass: {
    backgroundColor: theme.palette.primary.main,
    paddingLeft: "0vw",
    transition: theme.transitions.create("paddingLeft", {
      easing: theme.transitions.easing.easeIn,
      duration: "1s",
    }),
    minWidth: "100vw",
    transition: theme.transitions.create("minWidth", {
      easing: theme.transitions.easing.easeOut,
      duration: "1s",
    }),
  },
  secondClass: {
    backgroundColor: theme.palette.primary.main,
    paddingLeft: "10vw",
    transition: theme.transitions.create("paddingLeft", {
      easing: theme.transitions.easing.easeOut,
      duration: "1s",
    }),
    minWidth: "100vw",
    transition: theme.transitions.create("minWidth", {
      easing: theme.transitions.easing.easeOut,
      duration: "1s",
    }),
  },
  li: {
    marginRight: "-32px",
    marginLeft: "-3px"
  },
  liText: {
    marginLeft: "32px",
    marginRight: "32px"
  },
  main: {
    overflowY: "scroll"
  }
}));

function App() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [text, setText] = useState("");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.pathname = "/home"
    }

    let pathname = window.location.pathname;

    if (window.location.pathname === "/") {
      setText("Home");
    } else {
      let pageTitle = pathname.replace("/", "");

      setText(pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item>
          <div className={classes.mainHeader}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <SiteHeader className={classes.siteHeaderComponent} />
              </Grid>
              <Grid item xs={12}>
                <AppBar
                  className={classes.nav}
                  position="static"
                  color="secondary"
                >
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={() => toggleDrawer()}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap color="inherit">
                      {text}
                    </Typography>
                  </Toolbar>
                </AppBar>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <div className={classes.mainContent}>
          <div className={classes.appBar}>
            <Grid item xs={3}>
              <Drawer
                variant="persistent"
                className={classes.drawer}
                open={drawer}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <Toolbar />
                <div className={classes.drawerContainer}>
                  <List>
                    {[
                      { icon: <HomeIcon />, text: "Home", link: "home" },
                      { icon: <InfoIcon />, text: "About", link: "about" },
                      { icon: <StoreIcon />, text: "Store", link: "store" },
                      {
                        icon: <CommentTwoToneIcon />,
                        text: "Blog",
                        link: "blog",
                      },
                    ].map((nav, index) => (
                      <NavLink
                        onClick={() => setText(nav.text)}
                        className={classes.link}
                        strict
                        exact
                        key={`/${nav.link}`}
                        to={`/${nav.link}`}
                      >
                        <ListItem button key={nav.text}>
                          <ListItemIcon
                            classes={{
                              root: 
                                classes.li
                            }}
                          >
                            {nav.icon}
                          </ListItemIcon>
                          <Hidden only={["sm", "xs", "md"]}>
                            <ListItemText className={classes.liText} primary={nav.text} />
                          </Hidden>
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {[
                      { icon: <EmailIcon />, text: "Email", link: "email" },
                    ].map((nav, index) => (
                      <NavLink
                        onClick={() => setText(nav.text)}
                        className={classes.link}
                        strict
                        exact
                        key={`/${nav.link}`}
                        to={`/${nav.link}`}
                      >
                        <ListItem button key={nav.text}>
                          <ListItemIcon
                            classes={{
                              root: 
                                classes.li
                            }}
                          >
                            {nav.icon}
                          </ListItemIcon>
                          <Hidden only={["sm", "xs", "md"]}>
                            <ListItemText className={classes.liText} primary={nav.text} />
                          </Hidden>
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                </div>
              </Drawer>
            </Grid>
          </div>
          <div className={classes.main}>
          <main
            className={clsx(classes.firstClass, {
              [classes.secondClass]: drawer,
            })}
          >
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <div className={classes.mainSpace}>
                      <Switch location={location}>
                        <Route exact path="/home">
                          <div>
                            <Home />
                          </div>
                        </Route>
                        <Route exact path="/about">
                          <div>
                            <About />
                          </div>
                        </Route>
                        <Route exact path="/store">
                          <div>
                            <Store />
                          </div>
                        </Route>
                        <Route exact path="/blog">
                          <div>
                            <Blog />
                          </div>
                        </Route>
                        <Route exact path="/email">
                          <div>
                            <Email />
                          </div>
                        </Route>
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </main>
          </div>
        </div>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
