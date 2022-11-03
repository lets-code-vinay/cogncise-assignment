import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    background: "black",
    width: "100%",
    height: "100vh",
    opacity: "0.2",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "99",
  },

  spinner: {
    position: "absolute",
    top: "48%",
    left: "50%",
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={(e) => e.preventDefault()}>
      {/* <CircularProgress className={classes.spinner} /> */}
      <CircularProgress color="secondary" className={classes.spinner} />
    </div>
  );
}
