import React from "react";
import axios from "axios";

import {
  makeStyles,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import "./styles.css";

import { Icons } from "../../Configs/ImageContainer";
import { APIs } from "../../Configs/Apis";
import Spinner from "../../Components/Spinner";

const useStyle = makeStyles(() => ({
  main_body: {
    backgroundColor: "#363740",
    width: "100%",
    height: "100vh",
  },

  card_body: {
    width: "26%",
    height: "68vh",
    margin: "auto",
    paddingTop: "10%",
  },
  card: {
    padding: "10px",
  },
  card_logo: {
    width: "40px",
    margin: "40px auto 10px",
  },

  card_logo_text: {
    // fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "19px",
    lineHeight: "24px",
    textAlign: "center",
    letterSpacing: "0.4px",
    color: "#A4A6B3",
    opacity: 0.7,
  },

  card_title: {
    // fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineWeight: "30px",
    textAlign: "center",
    letterSpacing: "0.3px",
    color: "#252733",
  },

  card_subtitle: {
    // fontFamily: 'Mulish',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    letterSpacing: "0.3px",
    color: "#9FA2B4",
  },

  login_box: {
    margin: "5% auto",
  },

  login_label: {
    // fontFamily: 'Mulish',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: "0.3px",
    textTransform: "uppercase",
    color: "#9FA2B4",
  },

  login_input: {
    background: "#FCFDFE",
    border: "1px solid #F0F1F7",
    borderRadius: "5px",
    width: "100%",
    height: "42px",
    padding: "5px",
  },

  password_label_container: {
    display: "flex",
    justifyContent: "space-between",
  },

  login_button: {
    width: "100%",
    margin: "5% auto",
  },

  sign_up_text: {
    textDecoration: "none",
    "text-decoration": "none",
  },
}));

const Login = () => {
  const classes = useStyle();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showLoader, setLoader] = React.useState(false);

  const handleLogin = () => {
    console.log("data", email, password);

    try {
      setLoader(true);

      axios
        .post(APIs.login, { email, password })
        .then(({ data, status }) => {
          if (status == 200) {
            localStorage.setItem("token", data?.token);
            setLoader(false);
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  return (
    <>
      {showLoader && <Spinner />}

      <Box className={`${classes.main_body} main_body`}>
        <Box className={`${classes.card_body} card_body`}>
          <Card sx={{ minWidth: 275 }} className={`${classes.card} card`}>
            <CardContent>
              <CardMedia
                className={`${classes.card_logo} card_logo`}
                component="img"
                height="40"
                width="40"
                image={Icons.Logo}
                alt="Logo"
              />
              <Typography
                className={`${classes.card_logo_text} card_logo_text`}
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Dashboard Kit
              </Typography>

              <Typography
                variant="h5"
                component="div"
                className={`${classes.card_title} card_title`}
              >
                Log In to Dashboard Kit
              </Typography>

              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                className={`${classes.card_subtitle} card_subtitle`}
              >
                Enter your email and password below
              </Typography>

              <Box className={`${classes.login_form} login_form`}>
                <Box className={`${classes.login_box} login_box`}>
                  <label className={`${classes.login_label} login_label`}>
                    Email
                  </label>
                  <br />
                  <input
                    className={`${classes.login_input} login_input`}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </Box>

                <Box className={`${classes.login_box} login_box`}>
                  <Box
                    className={`${classes.password_label_container} password_label_container`}
                  >
                    <label className={`${classes.login_label} login_label`}>
                      Password
                    </label>
                    <Typography
                      className={`${classes.login_label} login_label`}
                      onClick={console.log("clicked")}
                    >
                      {" "}
                      Forgot Password
                    </Typography>
                  </Box>
                  <br />
                  <input
                    placeholder="Enter Password"
                    className={`${classes.login_input} login_input`}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
              </Box>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.login_button} login_button`}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </CardActions>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                className={`${classes.card_subtitle} card_subtitle`}
              >
                Don’t have an account?{" "}
                <span className={`${classes.sign_up_text} sign_up_text`}>
                  <a href="/sign-up">Sign up</a>
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Login;
