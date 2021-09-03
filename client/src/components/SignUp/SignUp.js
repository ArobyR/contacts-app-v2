import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../globalStyles";

const SignUp = () => {
  const [username, setUsername] = useState("");
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
          Sign Up
        </Typography>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            InputProps={{ inputProps: { minLength: 2, max: 30 } }}
            autoFocus={true}
            required
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            InputProps={{ inputProps: { minLength: 6 } }}
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button
              aria-label="signup"
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <Typography className={classes.root}>
          <Link to="/login">Back</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default SignUp;
