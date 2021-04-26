import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

//Styles
const StyledDiv = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }
  .logo img {
    height: 15rem;
    width: 15rem;
  }
  .submit {
    margin-top: 5%;
    margin-bottom: 10%;
    background-color: #5aa637;
    color: white;
    &:hover {
      background-color: black;
      color: #5aa637;
      transition: 1s;
    }
    transition: 0.5s;
  }
  a {
    color: black;
    text-decoration: none;
  }
  h5 {
    color: #5aa637;
    text-align: center;
  }
`;

//Copyright
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Green Orchard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//Form styles
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1616690002031-c1a44eddd3bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#5AA637",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "black",
  },
}));

function Login() {
  const classes = useStyles();
  const initialFormValues = {
    user_username: "",
    user_password: "",
    user_email: "",
    user_account_type: 0,
  };
  const [values, setValues] = useState(initialFormValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://medical-cannabis-backend.herokuapp.com/auth/register", values)
      .then((res) => {
        push("/login");
      })
      .catch((err) => {
        console.log("Register error", err);
      });
  };

  return (
    <StyledDiv>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form
              className={classes.form}
              validate="true"
              onSubmit={handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                name="user_username"
                value={values.user_username}
                onChange={handleChange}
                label="Username"
                required
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="user_email"
                name="user_email"
                value={values.user_email}
                onChange={handleChange}
                required
                label="Email"
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="user_password"
                type="password"
                id="user_password"
                value={values.user_password}
                onChange={handleChange}
                required
                label="Password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={"submit"}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/login">Already have an account? Sign In</Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}

export default Login;
