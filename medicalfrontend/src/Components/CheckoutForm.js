import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const StyledDiv = styled.div`
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
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CheckoutForm(props) {
  const classes = useStyles();
  const initialFormValues = {
    information_firstName: "",
    information_lastName: "",
    information_phone: "",
    information_birthdate: "",
    information_medical_id: "",
    user_id: props.user_id,
  };
  const [values, setValues] = useState(initialFormValues);
  const [loadValue, setLoadValue] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://medical-cannabis-backend.herokuapp.com/users/information/${props.user_id}`
      )
      .then((res) => {
        res.data.length === 0 ? <div></div> : setValues(res.data[0]);
        setLoadValue(res.data[0]);
      })
      .catch((err) => {
        console.log("Axios GET checkoutform error", err);
      });
  }, [props.user_id]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadValue === undefined
      ? axios
          .post(
            "https://medical-cannabis-backend.herokuapp.com/users/information",
            values
          )
          .then((res) => {
            push("/checkout");
          })
          .catch((err) => {
            console.log("Checkout new post error", err);
          })
      : axios
          .put(
            `https://medical-cannabis-backend.herokuapp.com/users/information/${loadValue.information_id}`,
            values
          )
          .then((res) => {
            push("/checkout");
          })
          .catch((err) => {
            console.log("Checkout edit post error", err);
          });
  };

  return (
    <StyledDiv>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="information_firstName"
              label="First Name"
              name="information_firstName"
              autoFocus
              onChange={handleChange}
              value={values.information_firstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="information_lastName"
              label="Last Name"
              name="information_lastName"
              autoFocus
              onChange={handleChange}
              value={values.information_lastName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="information_phone"
              label="Phone"
              name="information_phone"
              autoFocus
              onChange={handleChange}
              value={values.information_phone}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="information_birthdate"
              label=" Birthday YYYY-MM-DD"
              name="information_birthdate"
              autoFocus
              onChange={handleChange}
              value={values.information_birthdate}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="information_medical_id"
              label=" Medical ID"
              name="information_medical_id"
              autoFocus
              onChange={handleChange}
              value={values.information_medical_id}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Continue
            </Button>
          </form>
        </div>
      </Container>
    </StyledDiv>
  );
}
const mapStateToProps = (state) => {
  return {
    user_id: state.user.user_id,
  };
};

export default connect(mapStateToProps)(CheckoutForm);
