import React from "react";
import { connect } from "react-redux";
import { editUser } from "../../actions/usersAction";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const EditUser = props => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [about, setAbout] = React.useState("");

  const onFirstNameChange = event => setFirstName(event.target.value);
  const onLastNameChange = event => setLastName(event.target.value);
  const onEmailChange = event => setEmail(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);
  const onCountryChange = event => setCountry(event.target.value);
  const onAboutChange = event => setAbout(event.target.value);

  const findUser = props.currentUsers.filter(
    currentUser => currentUser.id === parseInt(props.match.params.id)
  );

  const userOn = findUser[0];

  const onSubmit = event => {
    event.preventDefault();

    const user = {
      firstName: firstName ? firstName : userOn.firstName,
      lastName: lastName ? lastName : userOn.lastName,
      email: email ? email : userOn.email,
      password: password ? password : userOn.password,
      country: country ? country : userOn.country,
      about: about ? about : userOn.about
    };
    props.editUser(userOn.id, user);
    props.history.push("/");
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit User Information
        </Typography>

        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label={userOn.firstName ? userOn.firstName : "Firstname"}
                autoFocus
                onChange={onFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label={userOn.lastName ? userOn.lastName : "Lastname"}
                name="lastName"
                autoComplete="lname"
                onChange={onLastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="country"
                label={userOn.country ? userOn.country : "Country"}
                type="country"
                id="country"
                autoComplete="country"
                onChange={onCountryChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label={userOn.email ? userOn.email : "Email"}
                name="email"
                autoComplete="email"
                onChange={onEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onPasswordChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
            >
              <TextField
                variant="outlined"
                fullWidth
                name="about"
                label={userOn.about ? userOn.about : "About"}
                type="about"
                id="about"
                autoComplete="about"
                onChange={onAboutChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    currentUsers: state.users
  };
};

export default connect(
  mapStateToProps,
  { editUser }
)(EditUser);
