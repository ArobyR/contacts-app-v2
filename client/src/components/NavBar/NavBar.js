import React from "react";

import { AppBar, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const NavBar = () => {
  const classes = useStyles();
    const logout = () => {
        
    }
    
  return (
    <AppBar className={classes.root} position="static">
      <Typography display="inline" className={classes.title} variant="h6">
        Contact App
      </Typography>
      <Button
        onClick={() => console.log("Hgogooohoho")}
        className={classes.button}
        color="secondary"
        variant="contained"
      >
        Logout
      </Button>
    </AppBar>
  );
};

export default NavBar;
