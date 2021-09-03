import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../globalStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Your email ${email} and ${password}`);
  };

  return (
    <div className="App">
      <Paper elevation={3}>
        <Typography
          className={classes.h2}
          align="center"
          color="textPrimary"
          variant="h4"
          component="h2"
        >
          LOGIN
        </Typography>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            autoComplete="off"
            autoFocus={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
            autoComplete="off"
            InputProps={{ inputProps: { minLength: 6 } }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button
              aria-label="login"
              type="submit"
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </div>
        </form>
        <Typography className={classes.root}>
          Not a member?
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
